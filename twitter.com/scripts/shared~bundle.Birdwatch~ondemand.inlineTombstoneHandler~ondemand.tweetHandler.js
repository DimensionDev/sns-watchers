;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '3zeG': function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')
      var i = n('zb92'),
        o = Object(i.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(188)]).then(n.bind(null, 'MzK7'))
          },
        })
      t.a = o
    },
    '68+r': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('k49u'),
        c = n('3XMw'),
        l = n.n(c).a.ed428a75,
        s = ((i = {}), r()(i, a.a.NotMutingTargetUser, { toast: { text: l } }), r()(i, 'showToast', !0), i)
    },
    '6bZg': function (e, t, n) {
      'use strict'
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('OIC0')
      t.a =
        ((i = {}),
        r()(i, a.a.CASHTAG, void 0),
        r()(i, a.a.EMOJI, void 0),
        r()(i, a.a.HASHTAG, 'hashtag_click'),
        r()(i, a.a.INTERACTIVE_HIGHLIGHT, 'highlight_click'),
        r()(i, a.a.MEDIA, void 0),
        r()(i, a.a.MENTION, 'mention_click'),
        r()(i, a.a.TEXT, void 0),
        r()(i, a.a.URL, 'open_link'),
        i)
    },
    TZwD: function (e, t, n) {
      'use strict'
      var i = n('EbOo'),
        o = n('u0B7'),
        r = n('24HD')
      t.a = function (e) {
        var t = e.addToast,
          n = e.behavioralEventEntityToken,
          a = e.block,
          c = e.createLocalApiErrorHandler,
          l = e.promotedContent,
          s = e.scribeAction,
          d = e.unblock,
          u = e.user,
          h = function () {
            d(u.id_str, { promotedContent: l }).catch(c(o.a)), s({ element: 'unblock' })
          },
          _ = {
            user: u,
            source: r.k.TWEET,
            blockAction: function () {
              a(u.id_str, { promotedContent: l }).then(function () {
                t({
                  action: { label: r.l, onAction: h, behavioralEventViewType: 'unblock' },
                  behavioralEventEntityToken: n,
                  text: r.d,
                })
              }, c(i.a)),
                s({ element: 'block' })
            },
            unblockAction: h,
          }
        return Object(r.g)(_)
      }
    },
    foB5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('k49u'),
        c = n('3XMw'),
        l = n.n(c).a.ee87e71c,
        s = ((i = {}), r()(i, a.a.SelfMuteError, { toast: { text: l } }), r()(i, 'showToast', !0), i)
    },
    j7tW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return p
        })
      var i = n('KEM+'),
        o = n.n(i),
        r = (n('2G9S'), n('oEOe')),
        a = n('PiaM'),
        c = 'rweb/'.concat('pinnedTweets'),
        l = n('x5Pi'),
        s = n('G6rE'),
        d = n('SRyb'),
        u = r.a(c, 'PIN'),
        h = r.a(c, 'UNPIN'),
        _ = function (e) {
          return function (t, n, i) {
            var c = i.api,
              h = i.featureSwitches
            return r.c(t, { params: { id: e }, request: c.Tweets.pin })(
              { actionTypes: u, context: 'ACTION_PIN_TWEET', meta: { tweetId: e } },
              function (i) {
                var r = s.e.selectLoggedInUser(n())
                if (void 0 !== r) {
                  var c = r.id_str,
                    u = r.pinned_tweet_ids_str && r.pinned_tweet_ids_str[0]
                  t(s.e.patchUser(c, { pinned_tweet_ids_str: [e] }))
                  var _ = Object(d.a)(h, c, 'default'),
                    m = u
                      ? [_.removeTweets(o()({}, u, !0)), _.injectEntry(a.k({ id: u, sortIndex: u }), { atTop: !1 })]
                      : []
                  return [].concat(m, [
                    _.removeTweets(o()({}, e, !0)),
                    _.injectEntry(
                      a.k({ id: e, content: { socialContext: { generalContext: l.a } }, sortIndex: 'NOT_USED' }),
                    ),
                  ])
                }
              },
            )
          }
        },
        m = function (e) {
          return function (t, n, i) {
            var c = i.api,
              l = i.featureSwitches
            return r.c(t, { params: { id: e }, request: c.Tweets.unpin })(
              { actionTypes: h, context: 'ACTION_UNPIN_TWEET', meta: { tweetId: e } },
              function (i) {
                var r = s.e.selectLoggedInUser(n())
                if (void 0 !== r) {
                  var c = r.id_str
                  return (
                    t(s.e.patchUser(c, { pinned_tweet_ids_str: [] })),
                    [
                      Object(d.a)(l, c, 'default').removeTweets(o()({}, e, !0)),
                      Object(d.a)(l, c, 'default').injectEntry(a.k({ id: e, sortIndex: e }), { atTop: !1 }),
                    ]
                  )
                }
              },
            )
          }
        },
        p = function (e, t) {
          var n = s.e.selectLoggedInUser(e)
          return !(null == n || !n.pinned_tweet_ids_str) && n.pinned_tweet_ids_str[0] === t
        }
    },
    jQy5: function (e, t, n) {
      'use strict'
      var i = n('OrGc'),
        o = n('foB5'),
        r = n('1bnC'),
        a = n('68+r'),
        c = n('P2xQ')
      t.a = function (e) {
        var t = e.addToast,
          n = e.behavioralEventEntityToken,
          l = e.createLocalApiErrorHandler,
          s = e.dismissUserFromConversation,
          d = e.mute,
          u = e.promotedContent,
          h = e.scribeAction,
          _ = e.unmute,
          m = e.user,
          p = function () {
            _(m.id_str, { promotedContent: u }).then(function () {
              t({ text: Object(c.d)(m.screen_name), behavioralEventEntityToken: n })
            }, l(a.a)),
              h({ element: 'unmute' })
          },
          v = Object(c.a)(
            m,
            function () {
              d(m.id_str, { promotedContent: u }).then(function () {
                s && s({ userId: m.id_str, feedbackKeys: ['UnfollowEntity'] }),
                  t({
                    action: { label: r.a, onAction: p, behavioralEventViewType: 'unmute_person' },
                    behavioralEventEntityToken: n,
                    text: Object(c.b)(m.screen_name),
                  })
              }, l(o.a)),
                h({ element: 'mute' })
            },
            p,
          ),
          w = v.Icon,
          f = v.behavioralEventContext,
          C = v.onClick
        return { behavioralEventContext: f, Icon: w, text: v.text, onClick: C, shortcutKey: i.e.mute }
      }
    },
    xZXe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ve
      })
      var i = n('97Jx'),
        o = n.n(i),
        r = n('ddV6'),
        a = n.n(r),
        c = n('RhWx'),
        l = n.n(c),
        s = n('VrFO'),
        d = n.n(s),
        u = n('Y9Ll'),
        h = n.n(u),
        _ = n('1Pcy'),
        m = n.n(_),
        p = n('5Yy7'),
        v = n.n(p),
        w = n('2VqO'),
        f = n.n(w),
        C = n('KEM+'),
        b = n.n(C),
        k = n('yiKp'),
        T = n.n(k),
        g =
          (n('2G9S'),
          n('0zG9'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('vrRf'),
          n('ERkP')),
        y = n.n(g),
        I = n('ZyXd'),
        A = n('TZwD'),
        E = (n('ho0z'), n('RqPI')),
        P = n('1YZw'),
        S = n('Ig1G'),
        x = n('6rlp'),
        O = n('0pUJ'),
        U = n('Fmkq'),
        M = n('j7tW'),
        L = n('Zejx'),
        D = n('XOJV'),
        F = n('D5n3'),
        R = n('G6rE'),
        B = n('jL08'),
        N = n('eSoz'),
        H = n('rxPX'),
        j = n('0KEI'),
        V = n('EGrD'),
        K = n('x5Pi'),
        q = n('P1r1'),
        G = function (e, t) {
          var n = t.tweetId
          return Object(M.b)(e, n)
        },
        W = function (e, t) {
          return t.tweetId
        },
        z = function (e, t) {
          var n = t.urtAdvertiser,
            i = t.urtPromotedContent
          if (e && i) {
            var o = e.promoted_content
            return T()(
              T()({}, e),
              {},
              {
                promoted_content: T()(
                  {
                    adMetadataContainer: i.adMetadataContainer,
                    disclosure_type: i.disclosureType,
                    experiment_values: i.experimentValues,
                    impression_id: i.impressionId,
                    advertiser: n ? { id_str: n.id_str } : void 0,
                    advertiser_name: (null == n ? void 0 : n.name) || void 0,
                    click_tracking_info: i.clickTrackingInfo,
                  },
                  o,
                ),
              },
            )
          }
          return e
        },
        J = function (e, t) {
          return t.socialContext
        },
        Q = function (e, t) {
          var n = t.socialContext,
            i = n && n.topicContext
          return i ? L.a.select(e, i.topicId) : void 0
        },
        Z = function (e, t) {
          var n = t.tweetId,
            i = n && D.a.select(e, n)
          return i ? Object(N.g)(e, i) : void 0
        },
        X = function (e, t) {
          var n = D.a.createHydratedTweetSelector(W)(e, t),
            i = null == n ? void 0 : n.quoted_status
          return i ? Object(N.g)(e, i) : void 0
        },
        Y = function (e, t) {
          return t.urtPromotedContent
        },
        $ = function (e, t) {
          var n = t.urtPromotedContent
          return n ? R.e.select(e, n.advertiserId) : null
        },
        ee = function (e, t) {
          return t.contextTweetId
        },
        te = Object(H.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: V.c,
              articleDomains: B.b,
              community: Z,
              contextTweet: D.a.createHydratedTweetSelector(ee),
              displaySensitiveMedia: q.k,
              explicitSocialContext: J,
              isNsfwUser: q.t,
              isPinned: G,
              loggedInUser: R.e.selectLoggedInUser,
              quoteTweetCommunity: X,
              topic: Q,
              tweet: D.a.createHydratedTweetSelector(W),
              urtAdvertiser: $,
              urtPromotedContent: Y,
              userCountry: E.y,
              userLanguage: E.o,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              i,
              o = e.adFreeArticleDomains,
              r = e.articleDomains,
              a = e.community,
              c = e.contextTweet,
              l = e.displaySensitiveMedia,
              s = e.explicitSocialContext,
              d = e.isNsfwUser,
              u = e.isPinned,
              h = e.loggedInUser,
              _ = e.quoteTweetCommunity,
              m = e.topic,
              p = e.tweet,
              v = e.urtAdvertiser,
              w = e.urtPromotedContent,
              f = e.userCountry,
              C = e.userLanguage,
              b = p && Object(K.f)(p, null == h ? void 0 : h.id_str),
              k =
                null == p ||
                null === (t = p.card) ||
                void 0 === t ||
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (i = n.domain) ||
                void 0 === i
                  ? void 0
                  : i.string_value,
              T = Object(B.a)(r, k),
              g = null == p ? void 0 : p.quoted_status,
              y = g ? Object(K.f)(g, null == h ? void 0 : h.id_str, _) : void 0,
              I = y && Object(K.e)(y),
              A = Object(S.c)(null == a ? void 0 : a.role)
            return {
              adFreeArticleDomains: o,
              contextTweet: c,
              displaySensitiveMedia: l,
              isCardArticle: T,
              isNsfwUser: d,
              isPinned: u,
              loggedInUser: h,
              promotedContentAdvertiser: v || void 0,
              quoteTweetSocialContextProps: I,
              socialContext: s || b,
              topic: m,
              tweet: z(p, { urtPromotedContent: w, urtAdvertiser: v }),
              userCountry: f,
              userLanguage: C,
              withCommunityModerationAuthority: A,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: P.b,
              block: R.e.block,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CONTAINER_CONTEXT',
              ),
              log: x.a,
              fetchAdFreeToken: V.a,
              fetchCommunityIfNeeded: N.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: L.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: V.b,
              mute: O.a,
              onUnretweet: F.a,
              richScribeAction: U.richScribeAction,
              setArticlesVisited: B.e,
              undoTopicNotInterested: L.a.undoNotInterested,
              unblock: R.e.unblock,
              unmute: R.e.unmute,
            }
          })
          .withAnalytics(),
        ne = n('6bZg'),
        ie = n('LSr9'),
        oe = n('3XMw'),
        re = n.n(oe),
        ae = n('iFPY'),
        ce = n('hACr'),
        le = n('jQy5'),
        se = n('3IPs'),
        de = n('Rp9C'),
        ue = n('uArA'),
        he = n('X04g'),
        _e = n('xM7j'),
        me = n('BLtI'),
        pe = n('3zeG'),
        ve = n('IO7v'),
        we = n('MWbm'),
        fe = n('v6aA'),
        Ce = n('E0cF'),
        be = n('OIC0'),
        ke = n('+pKb'),
        Te = n('/Ikv'),
        ge = n('Z6aJ'),
        ye = n('lHOd'),
        Ie = n('7JQg'),
        Ae = n('cFuS'),
        Ee = n('24HD'),
        Pe = n('4hQ9'),
        Se = n('fz3c'),
        xe = n('gZV8'),
        Oe = (function (e) {
          v()(n, e)
          var t = f()(n)
          function n() {
            var e
            d()(this, n)
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(m()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  i = n.id,
                  o = n.onFullyVisible,
                  r = n.onVisible
                e._lastVisibleId !== i && t.verticalOverlap() >= 1 && ((e._lastVisibleId = i), r(t))
                var a = t.visibleFraction() >= xe.c,
                  c = t.item.height > t.viewport.height,
                  l = t.verticalOverlap() === t.viewport.height || (c && t.visibleFraction() >= xe.d)
                e._lastFullyVisibleId !== i && (a || l) && ((e._lastFullyVisibleId = i), o && o(t))
              }),
              b()(m()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout,
                  i = n.height,
                  o = n.width,
                  r = { width: o, height: i }
                if (e._prevLayout && (e._prevLayout.width !== o || e._prevLayout.height !== i)) {
                  var a = e.props.onResize
                  a && a(e._prevLayout, r)
                }
                e._prevLayout = r
              }),
              e
            )
          }
          return (
            h()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.id
                  return y.a.createElement(
                    xe.e,
                    { key: n, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange },
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent),
        Ue = n('fs1G'),
        Me = n('oQhu'),
        Le = n('mN6z'),
        De = n('Cqiq'),
        Fe = re.a.f277e949,
        Re = re.a.e4c6c309,
        Be = (function (e) {
          v()(n, e)
          var t = f()(n)
          function n(e, i) {
            var o, r
            d()(this, n),
              (r = t.call(this, e, i)),
              b()(m()(r), '_shouldLogPromotedImpression', He.bind(null, r.context.featureSwitches)),
              b()(m()(r), '_isProbablyRemovedByAdBlocker', Ne.bind(null, r.context.featureSwitches)),
              b()(
                m()(r),
                '_isArticleNudgeEnabled',
                r.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              b()(
                m()(r),
                '_isCompatibilityScribeEnabled',
                r.context.featureSwitches.isTrue('responsive_web_extension_compatibility_scribe'),
              ),
              b()(m()(r), '_isCommunitiesEnabled', r.context.featureSwitches.isTrue('c9s_enabled')),
              b()(
                m()(r),
                '_hasClaimsForAdFreeArticles',
                null === (o = r.context.userClaims) || void 0 === o
                  ? void 0
                  : o.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              b()(m()(r), '_renderBlockOrUnblockConfirmationSheet', function () {
                var e = r.props.tweet.user
                return Object(Ee.j)({
                  confirmation: Object(Ee.h)(e),
                  onClose: r._handleBlockOrUnblockConfirmClose,
                  handleConfirm: r._handleBlockOrUnblockUserConfirm,
                })
              }),
              b()(m()(r), '_handleShowReportedTweet', function () {
                r.setState({ displayReported: !0, enableKeyboardShortcuts: !1 })
              }),
              b()(m()(r), '_handleUnretweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  i = e.tweet
                n(Ce.a.getOriginalTweet(i).id_str, { promotedContent: i.promoted_content }).catch(t(ve.a))
              }),
              b()(m()(r), '_getShortcutKeyHandlers', function () {
                var e = r._getMuteOrUnmuteAction(),
                  t = e.onClick,
                  n = e.shortcutKey,
                  i = r._getBlockOrUnblockAction().shortcutKey,
                  o = r.context.loggedInUserId === r.props.tweet.user.id_str
                return T()(T()({}, n && b()({}, n, t)), i && !o && b()({}, i, r._handleBlockOrUnblockConfirmOpen))
              }),
              b()(m()(r), '_handleBlockOrUnblockConfirmOpen', function () {
                r.setState({ showBlockOrUnblockConfirmation: !0 })
              }),
              b()(m()(r), '_handleBlockOrUnblockConfirmClose', function () {
                r.setState({ showBlockOrUnblockConfirmation: !1 })
              }),
              b()(m()(r), '_handleBlockOrUnblockUserConfirm', function () {
                var e = r._getBlockOrUnblockAction().onClick
                r._handleBlockOrUnblockConfirmClose(), e && e()
              }),
              b()(m()(r), '_getBaseTweetProps', function () {
                var e = r.props,
                  t = e.contextualClientEventInfo,
                  n = e.conversationTreeMetadata,
                  i = e.feedbackItems,
                  o = e.focalTweetId,
                  a = e.forwardPivotInfo,
                  c = e.isNsfwUser,
                  l = e.isPinned,
                  s = e.onTweetDismiss,
                  d = e.ruxContext,
                  u = e.saveAsRecentSearch,
                  h = e.scribeData,
                  _ = e.shouldStoreTypeaheadItem,
                  m = e.socialContext,
                  p = e.topicFollowPrompt,
                  v = e.tweet,
                  w = e.userCountry,
                  f = e.userLanguage,
                  C = e.withActionsDisabled,
                  b = e.withCommunityModerationAuthority,
                  k = e.withCurationMenu,
                  T = e.withHideReply,
                  g = e.withMuteConversation,
                  y = e.withUnhideReply,
                  I = e.withViewHiddenReplies,
                  A = Ce.a.getOriginalTweet(v),
                  E = r._getPromotedContent(),
                  P = h.items && h.items[0] && h.items[0].suggestion_details,
                  S = r._isSelected(),
                  x = A && A.card && !v.is_quote_status ? A.card.url : void 0,
                  O = r.context.loggedInUserId,
                  U = A.user.id_str === O,
                  M = !A.in_reply_to_status_id_str && U && !A.community_id_str,
                  L = r._renderConversationControlsTooltip()
                return {
                  excludeCardUrl: x,
                  inlineCalloutInfo: r._getInlineCalloutInfo(),
                  isFocal: o === v.id_str,
                  onAnalyticsClick: r._handleAnalyticsClick,
                  onAvatarClick: r._handleAvatarClick,
                  onBirdwatchNotesIconClick: r._handleBirdwatchNotesIconClick,
                  onBirdwatchNotesIconShown: r._handleBirdwatchNotesIconShown,
                  onBlur: r._handleBlur,
                  onCardLinkClick: r._handleCardLinkClick,
                  onClick: v.isPreview ? r._handlePreviewClick : r._handleTweetClick,
                  onEntityClick: r._handleEntityClick,
                  onFocus: r._handleFocus,
                  onLikeSuccess: r._handleLikeSuccess,
                  onMediaClick: v.isPreview ? r._handleEmbeddedMediaPreviewClick : r._handleEmbeddedMediaClick,
                  onMediaHashtagHighlightClick: r._handleMediaHashtagHighlightClick,
                  onModeratedIconClick: r._handleModeratedIconClick,
                  onModeratedIconShown: r._handleModeratedIconShown,
                  onPoliticalSponsorWebsiteClick: r._handlePoliticalSponsorWebsiteClick,
                  onPromoteButtonClick: r._handlePromoteButtonClick,
                  onPromoteAgainButtonClick: r._handlePromoteAgainButtonClick,
                  onPromotedDisclaimerLearnMoreClick: r._handlePromotedDisclaimerLearnMoreClick,
                  onPromotedIndicatorClick: r._handlePromotedIndicatorClick,
                  onQuoteTweetClick: r._handleQuoteTweetClick,
                  onReply: r._handleInlineReplyClick,
                  onReplyContextClick: r._handleReplyContextClick,
                  onScreenNameClick: r._handleScreenNameClick,
                  onSelfThreadClick: r._handleSelfThreadClick,
                  onSelfThreadImpression: r._handleSelfThreadImpression,
                  onUndoTopicNotInterestedClick: r._handleUndoTopicNotInterested,
                  promotedContent: E,
                  renderCurationActionMenu:
                    k && !v.isPreview
                      ? r._getRenderCurationActionMenu(
                          a && a.displayType,
                          i,
                          C,
                          c,
                          l,
                          S,
                          r._handleCaretClick,
                          s,
                          E,
                          A,
                          T,
                          b,
                          g,
                          y,
                          M,
                          I,
                          n,
                          null == t ? void 0 : t.entityToken,
                          L,
                          w,
                          f,
                        )
                      : void 0,
                  saveAsRecentSearch: u,
                  shouldStoreTypeaheadItem: _,
                  to: {
                    state: {
                      focal: A.id_str,
                      socialContext: m,
                      contextualClientEventInfo: t,
                      contextTweetId: v.id_str,
                      promotedContent: E,
                      suggestionDetails: P,
                      topicFollowPrompt: p,
                    },
                    pathname: A.permalink,
                    query: d ? { cxt: d } : void 0,
                  },
                }
              }),
              b()(m()(r), '_getReaderModeTweetProps', function () {
                var e,
                  t = r.props,
                  n = t.contextualClientEventInfo,
                  i = t.ruxContext,
                  o = t.scribeData,
                  a = t.socialContext,
                  c = t.topicFollowPrompt,
                  l = t.tweet,
                  s = t.tweetTextSize,
                  d = Ce.a.getOriginalTweet(l),
                  u = r._getPromotedContent(),
                  h = o.items && o.items[0] && o.items[0].suggestion_details
                return {
                  excludeCardUrl: null === (e = l.card) || void 0 === e ? void 0 : e.url,
                  onAnalyticsClick: Ue.a,
                  onAvatarClick: Ue.a,
                  onBlur: r._handleBlur,
                  onCardLinkClick: r._handleCardLinkClick,
                  onClick: l.isPreview ? r._handlePreviewClick : r._handleTweetClick,
                  onEntityClick: Ue.a,
                  onFocus: r._handleFocus,
                  onMediaClick: r._handleEmbeddedMediaClick,
                  onReplyContextClick: Ue.a,
                  to: {
                    state: {
                      focal: d.id_str,
                      socialContext: a,
                      contextualClientEventInfo: n,
                      contextTweetId: l.id_str,
                      promotedContent: u,
                      suggestionDetails: h,
                      topicFollowPrompt: c,
                    },
                    pathname: d.permalink,
                    query: i ? { cxt: i } : void 0,
                  },
                  tweet: l,
                  tweetTextSize: s || 'headline1',
                  withActions: !1,
                  withAvatarLink: !1,
                  withReaderModeBottomBar: !0,
                  withUserAvatar: !1,
                  withUserHoverCard: !1,
                  withUserName: !1,
                  withTimestamp: !1,
                }
              }),
              b()(m()(r), '_getInlineCalloutInfo', function () {
                var e = r.props,
                  t = e.displaySensitiveMedia,
                  n = e.isNsfwUser,
                  i = e.scribeNamespace,
                  o = e.tweet,
                  a = e.userCountry,
                  c = e.userLanguage,
                  l = r.context,
                  s = l.featureSwitches,
                  d = l.loggedInUserId
                if (
                  Object(Pe.e)({
                    displaySensitiveMedia: t,
                    featureSwitches: s,
                    isNsfwUser: n,
                    loggedInUserId: d,
                    tweet: o,
                    userCountry: a,
                    userLanguage: c,
                  })
                )
                  return Object(Pe.d)(o, i)
              }),
              b()(m()(r), '_getBlockOrUnblockAction', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.block,
                  i = e.contextualClientEventInfo,
                  o = e.createLocalApiErrorHandler,
                  a = e.tweet,
                  c = e.unblock,
                  l = a.user,
                  s = r._getPromotedContent(),
                  d = {
                    addToast: t,
                    behavioralEventEntityToken: null == i ? void 0 : i.entityToken,
                    createLocalApiErrorHandler: o,
                    scribeAction: function (e) {
                      var t = e.element
                      r._scribeAction({ element: t, action: 'click' })
                    },
                  }
                return Object(A.a)(T()(T()({}, d), {}, { block: n, unblock: c, user: l, promotedContent: s }))
              }),
              b()(m()(r), '_getMuteOrUnmuteAction', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.contextualClientEventInfo,
                  i = e.createLocalApiErrorHandler,
                  o = e.mute,
                  a = e.tweet,
                  c = e.unmute,
                  l = a.user,
                  s = {
                    addToast: t,
                    behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                    createLocalApiErrorHandler: i,
                    scribeAction: function (e) {
                      var t = e.element
                      r._scribeAction({ element: t, action: 'click' })
                    },
                  },
                  d = r._getPromotedContent()
                return Object(le.a)(T()(T()({}, s), {}, { mute: o, unmute: c, user: l, promotedContent: d }))
              }),
              b()(m()(r), '_renderConversationControlsTooltip', function () {
                var e = r.context.loggedInUserId,
                  t = r.props,
                  n = t.showMidConversationControlEducationText,
                  i = t.tweet,
                  o = Ce.a.getOriginalTweet(i)
                if (!o) return !1
                var a = !!o.community_id_str,
                  c = o.user.id_str === e,
                  l = o.reply_count > 0
                return !o.in_reply_to_status_id_str && c && l && !a && n
              }),
              b()(
                m()(r),
                '_getRenderCurationActionMenu',
                Object(Me.a)(function (e, t, n, i, o, r, a, c, l, s, d, u, h, _, m, p, v, w, f, C, b) {
                  return function () {
                    return y.a.createElement(pe.a, {
                      behavioralEventEntityToken: w,
                      feedbackItems: t,
                      forwardPivotDisplayType: e,
                      isDisabled: n,
                      isNsfwUser: i,
                      isPinned: o,
                      onMenuClick: a,
                      onTweetDismiss: c,
                      promotedContent: l,
                      tweet: s,
                      userCountry: C,
                      userLanguage: b,
                      withChangeConversationControls: m,
                      withChangeConversationControlsTooltip: f,
                      withCommunityModerationAuthority: u,
                      withHideReply: d,
                      withMuteConversation: h,
                      withUnhideReply: _,
                      withViewHiddenReplies: p,
                    })
                  }
                }),
              ),
              b()(
                m()(r),
                '_getDefaultScribeData',
                Object(Me.a)(function (e, t, n, i, o, a) {
                  var c = (function (e) {
                    var t = e.clickTrackingEmbedDetails,
                      n = e.contextualScribeData,
                      i = e.isSelected,
                      o = e.overflow,
                      r = e.promotedContent,
                      a = e.scribeData,
                      c = e.tweet,
                      l = de.a.addTweetToItems(a ? a.items : [], c, r, i, o)
                    return T()(
                      T()(T()(T()({}, n || {}), a || {}), t && { click_tracking_embed_details: t }),
                      {},
                      { items: l },
                    )
                  })({
                    tweet: e,
                    promotedContent: t,
                    scribeData: n,
                    overflow: i,
                    isSelected: r._isSelected(),
                    contextualScribeData: o,
                    clickTrackingEmbedDetails: a,
                  })
                  return (
                    (r._cachedFinalScribeData && Object(Le.a)(c, r._cachedFinalScribeData)) ||
                      (r._cachedFinalScribeData = c),
                    r._cachedFinalScribeData
                  )
                }),
              ),
              b()(m()(r), '_scribeAction', function (e) {
                var t,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  i = arguments.length > 2 ? arguments[2] : void 0,
                  o = arguments.length > 3 ? arguments[3] : void 0,
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  c = r.props,
                  s = c.analytics,
                  d = c.history,
                  u = c.richScribeAction,
                  h = c.scribeData,
                  _ = c.scribeNamespace,
                  m = c.tweet,
                  p = null === (t = d.location.state) || void 0 === t ? void 0 : t.overflow,
                  v = r._getPromotedContent(),
                  w = h
                if (o) {
                  var f = de.a.getUserItem(m.user, v),
                    C = w.items ? [].concat(l()(w.items), [f]) : [f]
                  w = T()(T()({}, w), {}, { items: C })
                }
                if (a) {
                  var b = { article_details: { is_ad_free: a } },
                    k = w.items ? [].concat(l()(w.items), [b]) : [b]
                  w = T()(T()({}, w), {}, { items: k })
                }
                var g = r._getDefaultScribeData(Ce.a.getOriginalTweet(m), v, w, p, s.contextualScribeData, i)
                u(T()(T()({}, _), e), T()(T()({}, g), n))
              }),
              b()(m()(r), '_handlePoliticalSponsorWebsiteClick', function () {
                r._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
              }),
              b()(m()(r), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
                return function () {
                  r._scribeAction({ component: e, element: 'learn_more', action: 'click' })
                }
              }),
              b()(m()(r), '_handlePromotedIndicatorClick', function () {
                r._handleAsyncPromotedEvent(Ae.b.FOOTER_PROFILE)
              }),
              b()(m()(r), '_handleFocus', function () {
                r.setState({ enableKeyboardShortcuts: !0 })
              }),
              b()(m()(r), '_handleBlur', function () {
                r.setState({ enableKeyboardShortcuts: !1 })
              }),
              b()(m()(r), '_getPromotedContent', function () {
                var e = r.props,
                  t = e.displayPromotedContent,
                  n = e.tweet
                return t ? n.promoted_content : void 0
              }),
              b()(m()(r), '_handleImpression', function (e) {
                r._shouldLogPromotedImpression(e) && r._handleAsyncPromotedEvent(Ae.b.IMPRESSION)
              }),
              b()(m()(r), '_handleFullyVisible', function (e) {
                r._shouldLogPromotedImpression(e) && r._handleAsyncPromotedEvent(Ae.b.DWELL)
              }),
              b()(m()(r), '_handleResize', function (e, t) {
                !r._isProbablyRemovedByAdBlocker(e) &&
                  r._isProbablyRemovedByAdBlocker(t) &&
                  (I.a.recordAdBlockerPresence(),
                  r._isCompatibilityScribeEnabled && r._scribeAction({ action: 'blocked_ad' }))
              }),
              b()(m()(r), '_handleInlineReplyClick', function (e) {
                var t = r.context.loggedInUserId,
                  n = r.props,
                  i = n.history,
                  o = n.tweet,
                  a = r._getPromotedContent()
                e.preventDefault(),
                  r._scribeAction({ element: 'inline_reply', action: 'reply' }),
                  i.push({
                    state: {
                      inReplyToStatusId: o.id_str,
                      isSelfThreadReply: !!t && Object(Pe.c)({ tweet: o, loggedInUserId: t }),
                      promotedContent: a,
                    },
                    pathname: '/compose/tweet',
                  })
              }),
              b()(m()(r), '_handleLikeSuccess', function () {
                if (r.context.featureSwitches.isTrue('home_timeline_like_reactivity_enabled')) {
                  var e = r.props.onLike,
                    t = 'LikeReactionFatigue'
                  try {
                    var n = JSON.parse(window.sessionStorage.getItem(t)) || 0
                    n < r.context.featureSwitches.getNumberValue('home_timeline_like_reactivity_fatigue') &&
                      e &&
                      e().then(function (e) {
                        null != e && e.performed && window.sessionStorage.setItem(t, JSON.stringify(n + 1))
                      })
                  } catch (i) {}
                }
              }),
              b()(m()(r), '_handleReplyContextClick', function (e, t) {
                return r._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
              }),
              b()(m()(r), '_handleAsyncPromotedEvent', function (e, t) {
                var n = r.props,
                  i = n.createLocalApiErrorHandler,
                  o = n.log,
                  a = n.tweet,
                  c = r._getPromotedContent()
                if (c) {
                  var l = c.disclosure_type,
                    s = c.impression_id
                  o({
                    disclosureType: l,
                    itemId: a.id_str,
                    itemType: Ae.c.TWEET,
                    params: T()({ event: e, impression_id: s }, t),
                  }).catch(i())
                }
              }),
              b()(m()(r), '_handleModeratedIconClick', function () {
                return r._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
              }),
              b()(m()(r), '_handleModeratedIconShown', function () {
                return r._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
              }),
              b()(m()(r), '_handleBirdwatchNotesIconClick', function () {
                return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
              }),
              b()(m()(r), '_handleBirdwatchNotesIconShown', function () {
                return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
              }),
              b()(m()(r), '_handleAnalyticsClick', function () {
                r._scribeAction({ element: 'analytics', action: 'click' })
              }),
              b()(m()(r), '_handlePromoteButtonClick', function () {
                r._scribeAction({ element: 'promote', action: 'click' })
              }),
              b()(m()(r), '_handlePromoteAgainButtonClick', function () {
                r._scribeAction({ element: 'promote_again', action: 'click' })
              }),
              b()(m()(r), '_handleAvatarClick', function () {
                var e = r.props.tweet
                r._handleSaveAsRecentSearchUser(),
                  r._scribeAction(
                    { element: 'avatar', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  r._handleAsyncPromotedEvent(Ae.b.PROFILE_IMAGE_CLICK)
              }),
              b()(m()(r), '_handleCaretClick', function () {
                return r._scribeAction({ element: 'caret', action: 'click' })
              }),
              b()(
                m()(r),
                '_handleTweetClick',
                Object(ue.a)(function (e) {
                  if (!e.defaultPrevented) {
                    if ((e.stopPropagation(), window.getSelection().toString().length)) return
                    r._scribeAction({ element: 'tweet', action: 'click' }),
                      r._handleAsyncPromotedEvent(Ae.b.VIEW_DETAILS)
                  }
                }),
              ),
              b()(m()(r), '_handlePreviewClick', function (e) {
                e.preventDefault()
              }),
              b()(m()(r), '_handleEmbeddedMediaPreviewClick', function (e) {
                null == e || e.preventDefault()
              }),
              b()(m()(r), '_handleEmbeddedMediaClick', function () {
                r._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                  r._handleAsyncPromotedEvent(Ae.b.EMBEDDED_MEDIA)
              }),
              b()(m()(r), '_handleQuoteTweetClick', function () {
                r._scribeAction({ element: 'tweet', action: 'click' }), r._handleAsyncPromotedEvent(Ae.b.VIEW_DETAILS)
              }),
              b()(m()(r), '_handleEntityClick', function (e, t, n) {
                var i = r.props,
                  o = i.adFreeArticleDomains,
                  c = i.createLocalApiErrorHandler,
                  l = i.fetchAdFreeToken,
                  s = i.tweet,
                  d = Ae.a[t],
                  u = ne.a[t],
                  h = r._getPromotedContent(),
                  _ = de.a.getClickTrackingEmbedDetails(h, n)
                if (d) {
                  var m =
                    d === Ae.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                      ? { url: e.currentTarget.href }
                      : void 0
                  r._handleAsyncPromotedEvent(d, m)
                }
                if (t === be.a.MEDIA) return r._handleTweetClick(e)
                t === be.a.URL && _ && r._scribeAction({ action: ke.b.CLICK_ID_EMBED }, {}, _)
                var p = !1
                if (r._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                  var v = new URL(n.expandedUrl).hostname,
                    w = new ie.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: n.embeddedUrl,
                      linkDomain: v,
                      adFreeArticleDomains: o,
                      tweetAuthorUserId: s.user.id_str,
                    }),
                    f = a()(w, 2),
                    C = f[0],
                    b = f[1]
                  C && (b(e), (p = !0))
                }
                if (t === be.a.MENTION) {
                  var k = null != n && n.text ? [{ item_type: he.a.ItemType.USER, name: n.text, id: n.id_str }] : void 0
                  return r._scribeAction({ action: u }, { targets: k }, void 0, void 0, p)
                }
                if (t === be.a.HASHTAG) {
                  var T = null != n && n.text ? [{ name: n.text }] : void 0
                  return r._scribeAction({ action: u }, { targets: T }, void 0, void 0, p)
                }
                if (t === be.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                  return r._scribeAction(
                    { element: 'interactive_text', action: u },
                    { interactive_text_details: { id: n.id } },
                    void 0,
                    void 0,
                    p,
                  )
                u && r._scribeAction({ action: u }, void 0, void 0, void 0, p)
              }),
              b()(m()(r), '_handleScreenNameClick', function () {
                var e = r.props.tweet
                r._handleSaveAsRecentSearchUser(),
                  r._scribeAction(
                    { element: 'user', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  r._handleAsyncPromotedEvent(Ae.b.SCREEN_NAME_CLICK)
              }),
              b()(m()(r), '_handleSelfThreadClick', function () {
                return r._scribeAction({ element: 'self_thread', action: 'click' })
              }),
              b()(m()(r), '_handleSelfThreadImpression', function () {
                return r._scribeAction({ element: 'self_thread', action: 'impression' })
              }),
              b()(m()(r), '_handleTopicFetch', function () {
                var e,
                  t = r.props,
                  n = t.createLocalApiErrorHandler,
                  i = t.fetchTopicIfNeeded,
                  o = t.socialContext,
                  a = o && (null === (e = o.topicContext) || void 0 === e ? void 0 : e.topicId)
                a && i(a).catch(n())
              }),
              b()(m()(r), '_handleCommunityFetch', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCommunityIfNeeded,
                  i = e.tweet
                if (r._isCommunitiesEnabled && i) {
                  var o,
                    a = i.community_id_str,
                    c = null === (o = i.quoted_status) || void 0 === o ? void 0 : o.community_id_str
                  a && n(a).catch(t()), c && n(c).catch(t())
                }
              }),
              b()(m()(r), '_handleUndoTopicNotInterested', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.topic,
                  i = e.undoTopicNotInterested
                r._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && i(n.id).catch(t())
              }),
              b()(m()(r), '_handleCardLinkClick', function (e) {
                var t,
                  n = r.props,
                  i = n.adFreeArticleDomains,
                  o = n.analytics,
                  c = n.createLocalApiErrorHandler,
                  l = n.fetchAdFreeToken,
                  s = n.isCardArticle,
                  d = n.setArticlesVisited,
                  u = n.tweet
                if (s && r._isArticleNudgeEnabled) {
                  var h,
                    _,
                    m = null == u || null === (h = u.card) || void 0 === h ? void 0 : h.url
                  if (m)
                    d(m),
                      o.scribe({
                        component: 'article_nudge',
                        element: 'read_article',
                        action: 'click',
                        data: {
                          items: [
                            {
                              token: null == u || null === (_ = u.card) || void 0 === _ ? void 0 : _.url,
                              in_reply_to_tweet_id: u.id_str,
                            },
                          ],
                        },
                      })
                }
                var p = null == u || null === (t = u.card) || void 0 === t ? void 0 : t.binding_values
                if (r._hasClaimsForAdFreeArticles && p) {
                  var v = new ie.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Te.a.getBindingValue(p, 'card_url'),
                      linkDomain: Te.a.getBindingValue(p, 'domain'),
                      adFreeArticleDomains: i,
                    }),
                    w = a()(v, 2),
                    f = w[0],
                    C = w[1]
                  f && C(e)
                }
              }),
              b()(m()(r), '_handleSaveAsRecentSearchUser', function () {
                var e = r.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  i = e.tweet.user
                t && n && n(he.a.ItemType.USER) && t({ user: { id: i.id_str, type: se.a.User } })
              }),
              b()(m()(r), '_isSelected', function () {
                var e = r.props,
                  t = e.conversationTreeMetadata,
                  n = e.tweet,
                  i = (t || {}).selectedTweet
                return i && n.id_str === i.selectedTweetId
              }),
              b()(m()(r), '_handleMediaHashtagHighlightClick', function () {
                r._handleAsyncPromotedEvent(Ae.b.HASHTAG_CLICK)
              }),
              (r.state = { displayReported: !1, enableKeyboardShortcuts: !1, showBlockOrUnblockConfirmation: !1 })
            var c = r._getPromotedContent()
            return (
              (r._shouldHidePromotedTweet =
                ge.a.isPromoted(c) && I.a.shouldHidePromotedTweets(r.context.featureSwitches)),
              r
            )
          }
          return (
            h()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(Le.a)(this.props, e) || !Object(Le.a)(this.state, t)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldHidePromotedTweet &&
                    this._isCompatibilityScribeEnabled &&
                    this._scribeAction({ action: 'hide_promoted' }),
                    this._handleTopicFetch(),
                    this._handleCommunityFetch(),
                    this._hasClaimsForAdFreeArticles && this.props.loadAdFreeArticleDomainsFromPersistence()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props,
                    n = t.conversationPosition,
                    i = t.conversationTreeMetadata,
                    o = t.showWithheldBannerOnMyTweets,
                    r = t.tweet
                  if (!this._shouldRender())
                    return i
                      ? y.a.createElement(_e.a, { conversationPosition: n, conversationTreeMetadata: i }, Re)
                      : null
                  var a = r.user.id_str === e,
                    c = Object(De.b)(Ce.a.getOriginalTweet(r).withheld_scope),
                    l = a && !r.retweeted_status,
                    s = l && 'user' === Ce.a.getOriginalTweet(r).withheld_scope && !o,
                    d = Object(Se.h)(r) && !this.state.displayReported
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c
                      ? y.a.createElement(
                          we.a,
                          null,
                          s ? null : this._renderWithheldTweet(),
                          l ? this._renderContent() : null,
                        )
                      : d
                      ? this._renderReportedTombstone()
                      : this._renderContent(),
                    this._renderIntentPrompt(),
                    this.state.showBlockOrUnblockConfirmation ? this._renderBlockOrUnblockConfirmationSheet() : null,
                  )
                },
              },
              {
                key: '_renderIntentPrompt',
                value: function () {
                  var e = this.props,
                    t = e.contextualClientEventInfo,
                    n = e.forwardPivotInfo,
                    i = e.history,
                    o = e.tweet,
                    r = e.tweetId
                  if (
                    o &&
                    'focal_module' === (null == t ? void 0 : t.component) &&
                    i.location.pathname.indexOf('/intent/') > -1 &&
                    i.location.query.tweet_id === r
                  )
                    return y.a.createElement(ae.a, {
                      forwardPivotInfo: n,
                      history: i,
                      location: i.location,
                      tweetId: o.id_str,
                    })
                },
              },
              {
                key: '_renderWithheldTweet',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.conversationTreeMetadata,
                    i = e.tweet,
                    o = i.user.id_str,
                    r = Ce.a.getOriginalTweet(i),
                    a = this.context.loggedInUserId,
                    c = !!a && a === o && r.retweeted,
                    l = r.withheld_text || r.text,
                    s = r.withheld_entities || r.entities,
                    d = i.user.id_str === a
                  return y.a.createElement(De.a, {
                    conversationPosition: t,
                    conversationTreeMetadata: d ? void 0 : n,
                    displayTextRange: r.display_text_range,
                    entities: s,
                    lang: r.lang,
                    onUnretweet: c ? this._handleUnretweet : void 0,
                    showUnretweetButton: c,
                    text: l,
                  })
                },
              },
              {
                key: '_renderReportedTombstone',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.conversationTreeMetadata,
                    i = e.tweet,
                    o = Ce.a.getOriginalTweet(i),
                    r = Object(Se.c)(o.reportingVisibility)
                  return y.a.createElement(
                    _e.a,
                    {
                      actionText: Fe,
                      conversationPosition: t,
                      conversationTreeMetadata: n,
                      lang: o.lang,
                      onClick: this._handleShowReportedTweet,
                    },
                    r,
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.allowDownvote,
                    i = t.analytics,
                    o = t.bookmarkFolderId,
                    r = t.contextTweet,
                    a = t.conversationPosition,
                    c = t.conversationTreeMetadata,
                    l = t.displayBlocked,
                    s = t.forwardPivotInfo,
                    d = t.hasModeratedReplies,
                    u = t.hideConversationControlsEducationText,
                    h = t.hideExclusivityInfoEducationTextInReplies,
                    _ = t.hideTrustedFriendsEducationTextInReplies,
                    m = t.history,
                    p = t.hitHighlights,
                    v = t.injectedFeedbackItem,
                    w = t.innerForwardPivotInfo,
                    f = t.isReaderMode,
                    C = t.isUnread,
                    b = t.linkify,
                    k = t.loggedInUser,
                    g = t.promotedContentAdvertiser,
                    I = t.quoteTweetSocialContextProps,
                    A = t.quotedTweetTombstoneInfo,
                    E = t.replyContext,
                    P = t.scribeData,
                    S = t.scribeNamespace,
                    x = t.shouldSelfThreadIncludeAvatar,
                    O = t.socialContext,
                    U = t.topic,
                    M = t.topicFollowPrompt,
                    L = t.tweet,
                    D = t.withActions,
                    F = t.withActionsDisabled,
                    R = t.withBirdwatchPivots,
                    B = t.withCardLinks,
                    N = t.withInlineMedia,
                    H = t.withQuotedTweetLinks,
                    j = t.withRemoveFromBookmarks,
                    V = t.withSelfThread,
                    K = t.withSocialContext,
                    q = t.withUserPresence,
                    G = this.state.enableKeyboardShortcuts,
                    W = Ce.a.getOriginalTweet(L),
                    z = this._getPromotedContent(),
                    J = Object(Le.a)(this._cachedScribeNamespace, S)
                      ? this._cachedScribeNamespace
                      : (this._cachedScribeNamespace = S),
                    Q = null === (e = m.location.state) || void 0 === e ? void 0 : e.overflow,
                    Z = {
                      allowDownvote: n,
                      bookmarkFolderId: o,
                      contextTweet: r,
                      conversationPosition: a,
                      conversationTreeMetadata: c,
                      displayBlocked: l,
                      enableKeyboardShortcuts: G,
                      forwardPivotInfo: s,
                      hasModeratedReplies: d,
                      hideConversationControlsEducationText: u,
                      hideExclusivityInfoEducationTextInReplies: h,
                      hideTrustedFriendsEducationTextInReplies: _,
                      hitHighlights: p,
                      injectedFeedbackItem: v,
                      innerForwardPivotInfo: w,
                      linkify: b,
                      loggedInUser: k,
                      promotedContentAdvertiser: g,
                      quotedTweetTombstoneInfo: A,
                      quoteTweetSocialContextProps: I,
                      replyContext: E,
                      shouldSelfThreadIncludeAvatar: x,
                      socialContext: O,
                      topic: U,
                      topicFollowPrompt: M,
                      tweet: L,
                      withActions: D,
                      withActionsDisabled: F,
                      withBirdwatchPivots: R,
                      withCardLinks: B,
                      withInlineMedia: N,
                      withQuotedTweetLinks: H,
                      withRemoveFromBookmarks: j,
                      withSelfThread: V,
                      withSocialContext: K,
                      withUnreadStyles: C,
                      withUserPresence: q,
                    },
                    X = T()(T()({}, Z), f ? this._getReaderModeTweetProps() : this._getBaseTweetProps()),
                    Y = y.a.createElement(
                      Ie.c,
                      { data: this._getDefaultScribeData(W, z, P, Q, i.contextualScribeData, void 0), namespace: J },
                      y.a.createElement(
                        ce.a,
                        { enabled: !!G, handlers: this._getShortcutKeyHandlers() },
                        y.a.createElement(me.b, X),
                      ),
                    )
                  return z
                    ? y.a.createElement(
                        Oe,
                        {
                          id: L.id_str,
                          onFullyVisible: this._handleFullyVisible,
                          onResize: this._handleResize,
                          onVisible: this._handleImpression,
                        },
                        Y,
                      )
                    : Y
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props.tweet
                  return !(
                    this._shouldHidePromotedTweet ||
                    this._tweetIsDeleted() ||
                    this._shouldHideBlockedTweet() ||
                    Object(Se.f)(e)
                  )
                },
              },
              {
                key: '_tweetIsDeleted',
                value: function () {
                  var e = this.props.tweet,
                    t = e.retweeted_status
                  return e.isDeleted || (t && t.isDeleted)
                },
              },
              {
                key: '_shouldHideBlockedTweet',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    i = n.displayBlocked,
                    o = n.focalTweetId,
                    r = n.tweet,
                    a = Ce.a.getOriginalTweet(r),
                    c =
                      !(null == r || null === (e = r.user) || void 0 === e || !e.blocking) ||
                      !(null == a || null === (t = a.user) || void 0 === t || !t.blocking)
                  return o !== r.id_str && !i && c
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(Be, 'defaultProps', {
        displayBlocked: !1,
        shouldSelfThreadIncludeAvatar: !1,
        showWithheldBannerOnMyTweets: !0,
        withCardLinks: !1,
        withCurationMenu: !0,
        withRemoveFromBookmarks: !1,
        withMuteConversation: !1,
      }),
        b()(Be, 'contextType', fe.a)
      var Ne = function (e, t) {
          return t.height <= e.getNumberValue('responsive_web_extension_compatibility_size_threshold', 50)
        },
        He = function (e, t) {
          return !(e.isTrue('responsive_web_extension_compatibility_impression_guard') && Ne(e, t.item))
        },
        je = function (e) {
          var t = y.a.useContext(ye.a)
          return e.tweet ? y.a.createElement(Be, o()({}, e, { history: t, tweet: e.tweet })) : null
        }
      je.defaultProps = Be.defaultProps
      var Ve = te(je)
      t.b = Object(Ie.a)({ component: 'tweet' })(Ve)
    },
  },
])
//# sourceMappingURL=WIPED
