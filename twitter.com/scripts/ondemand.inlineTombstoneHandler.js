;(window.webpackJsonp = window.webpackJsonp || []).push([
  [351],
  {
    'NO+D': function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('ERkP'),
        l = n.n(a),
        c = n('VPAj'),
        s = n('rcen'),
        d = n('ddV6'),
        u = n.n(d),
        h = n('xM7j'),
        p = n('xZXe'),
        _ = n('P1oR'),
        v = n('kY28'),
        m = function (e) {
          var t = e.actionText,
            n = e.children,
            o = e.contextTweetId,
            i = e.conversationPosition,
            r = e.conversationTreeMetadata,
            a = e.ctaLink,
            c = e.ctaText,
            s = e.forwardPivotInfo,
            d = e.innerForwardPivotInfo,
            m = e.isFocalTweet,
            w = e.isReaderMode,
            f = e.lang,
            b = e.onTweetDismiss,
            C = e.quotedTweetTombstoneInfo,
            y = e.socialContext,
            k = e.tweetId,
            g = e.withHideReply,
            I = l.a.useState(!0),
            A = u()(I, 2),
            T = A[0],
            E = A[1]
          l.a.useEffect(
            function () {
              E(!0)
            },
            [k],
          )
          var S = l.a.useCallback(function () {
            E(!1)
          }, [])
          return T || !k
            ? l.a.createElement(h.a, {
                actionText: t,
                children: n,
                conversationPosition: i,
                conversationTreeMetadata: r,
                ctaLink: a,
                ctaText: c,
                lang: f,
                onClick: S,
              })
            : k
            ? m && !w
              ? l.a.createElement(_.b, {
                  contextTweetId: o,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: d,
                  onTweetDismiss: b,
                  quotedTweetTombstoneInfo: C,
                  socialContext: y,
                  tweetId: k,
                  withHideReply: g,
                })
              : l.a.createElement(p.b, {
                  conversationPosition: i,
                  conversationTreeMetadata: r,
                  displayBlocked: !0,
                  displayPromotedContent: !0,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: d,
                  isReaderMode: w,
                  onTweetDismiss: b,
                  quotedTweetTombstoneInfo: C,
                  replyContext: w ? v.a.ReplyContextTypes.None : void 0,
                  shouldSelfThreadIncludeAvatar: !0,
                  tweetId: k,
                  withActions: !0,
                  withHideReply: g,
                  withInlineMedia: !0,
                  withSocialContext: !0,
                })
            : null
        },
        w = l.a.memo(m),
        f =
          (Object(c.a)(!1),
          function (e) {
            var t = e.alignment,
              n = e.entities,
              o = e.rtl,
              i = e.text
            return l.a.createElement(s.a, { alignment: t, entities: n, rtl: o, text: i })
          })
      t.default = function (e) {
        var t = e.createAdditionalProps,
          n = void 0 === t ? Object(c.a)(null) : t
        e.shouldDisplayBorder
        return r.g({
          bindActions: function (e) {
            return { applyFeedbackAction: e.module.applyFeedbackAction }
          },
          component: w,
          createProps: function (e) {
            var t,
              o,
              r,
              a,
              l = e.actions,
              c = e.entry,
              s = c.content,
              d = c.conversationPosition,
              u = c.conversationTreeMetadata,
              h = s.tombstoneInfo || {},
              p = h.revealText,
              _ = h.richRevealText,
              v = h.richText,
              m = h.text
            return i()(
              {
                actionText: _ ? f(_) : p,
                children: v ? f(v) : m,
                conversationPosition: d,
                conversationTreeMetadata: u,
                forwardPivotInfo: null === (t = s.tweet) || void 0 === t ? void 0 : t.forwardPivot,
                innerForwardPivotInfo: null === (o = s.tweet) || void 0 === o ? void 0 : o.innerForwardPivot,
                quotedTweetTombstoneInfo: null === (r = s.tweet) || void 0 === r ? void 0 : r.innerTombstoneInfo,
                tweetId: null === (a = s.tweet) || void 0 === a ? void 0 : a.id,
              },
              n(c, l),
            )
          },
          shouldDisplayBorder: function (e) {
            var t = e.conversationPosition,
              n = e.treeDisplay
            return 'VerticalConversation' !== (null == n ? void 0 : n.displayType) && (!t || !!t.isEnd)
          },
        })
      }
    },
    P1oR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return tt
      })
      var o = n('97Jx'),
        i = n.n(o),
        r = n('ddV6'),
        a = n.n(r),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        h = n.n(u),
        p = n('5Yy7'),
        _ = n.n(p),
        v = n('2VqO'),
        m = n.n(v),
        w = n('KEM+'),
        f = n.n(w),
        b = n('yiKp'),
        C = n.n(b),
        y =
          (n('2G9S'),
          n('lTEL'),
          n('7x/C'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('vrRf'),
          n('jQ3i'),
          n('x4t0'),
          n('ERkP')),
        k = n.n(y),
        g = n('TZwD'),
        I = n('6rlp'),
        A = n('RqPI'),
        T = n('1YZw'),
        E = n('Ig1G'),
        S = n('eSoz'),
        x = n('0pUJ'),
        P = n('Z6aJ'),
        D = n('SrIh'),
        F = n('Fmkq'),
        O = n('j7tW'),
        U = n('Zejx'),
        M = n('XOJV'),
        N = n('G6rE'),
        R = n('xZGM'),
        L = n('jL08'),
        H = n('rxPX'),
        B = n('0KEI'),
        j = n('EGrD'),
        q = n('x5Pi'),
        K = n('P1r1'),
        V = function (e, t) {
          return Object(O.b)(e, t.tweetId)
        },
        W = function (e, t) {
          return t.tweetId
        },
        G = function (e, t) {
          return t.contextTweetId
        },
        z = function (e, t) {
          var n = t.promotedContent,
            o = t.tweetId
          if (n && n.advertiser) return N.e.select(e, n.advertiser.id_str)
          if (n && P.a.isPromoted(n)) {
            var i = n.advertiser_name
            Object(D.a)('No advertiser info for non-URT promoted tweet', { extra: { advertiser_name: i, tweetId: o } })
          }
        },
        J = function (e, t) {
          return t.socialContext
        },
        Y = function (e, t) {
          var n = t.socialContext,
            o = n && n.topicContext
          return o ? U.a.select(e, o.topicId) : void 0
        },
        Z = function (e, t) {
          var n = M.a.createHydratedTweetSelector(W)(e, t)
          return null != n && n.community_id_str ? S.c.select(e, null == n ? void 0 : n.community_id_str) : void 0
        },
        Q = function (e, t) {
          var n = M.a.createHydratedTweetSelector(W)(e, t),
            o = null == n ? void 0 : n.quoted_status,
            i = null == o ? void 0 : o.community_id_str
          return i ? S.c.select(e, i) : void 0
        },
        X = function (e, t) {
          return 'PUSH' === t.history.action
        },
        $ = function (e, t) {
          return Object(R.A)(e, R.k)
        },
        ee = function (e, t) {
          return Object(R.y)(e, R.k)
        },
        te = Object(H.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: j.c,
              articleDomains: L.b,
              community: Z,
              contextTweet: M.a.createHydratedTweetSelector(G),
              daysSinceDownvoteEducation: ee,
              displaySensitiveMedia: K.l,
              explicitSocialContext: J,
              isForwardNavigation: X,
              isNsfwUser: K.u,
              isPinned: V,
              loggedInUser: N.e.selectLoggedInUser,
              promotedContentAdvertiser: z,
              quoteTweetCommunity: Q,
              shouldShowDownvoteFullscreenEducation: $,
              topic: Y,
              tweet: M.a.createHydratedTweetSelector(W),
              userCountry: A.y,
              userLanguage: A.o,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              o,
              i = e.adFreeArticleDomains,
              r = e.articleDomains,
              a = e.community,
              l = e.contextTweet,
              c = e.daysSinceDownvoteEducation,
              s = e.displaySensitiveMedia,
              d = e.explicitSocialContext,
              u = e.isForwardNavigation,
              h = e.isNsfwUser,
              p = e.isPinned,
              _ = e.loggedInUser,
              v = e.promotedContentAdvertiser,
              m = e.quoteTweetCommunity,
              w = e.shouldShowDownvoteFullscreenEducation,
              f = e.topic,
              b = e.tweet,
              C = e.userCountry,
              y = e.userLanguage,
              k = l
                ? Object(q.f)(l, null == _ ? void 0 : _.id_str, a)
                : b
                ? Object(q.f)(b, null == _ ? void 0 : _.id_str, a)
                : void 0,
              g =
                null == b ||
                null === (t = b.card) ||
                void 0 === t ||
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (o = n.domain) ||
                void 0 === o
                  ? void 0
                  : o.string_value,
              I = Object(L.a)(r, g),
              A = null == b ? void 0 : b.quoted_status,
              T = A ? Object(q.f)(A, null == _ ? void 0 : _.id_str, m) : void 0
            return {
              adFreeArticleDomains: i,
              community: a,
              contextTweet: l,
              daysSinceDownvoteEducation: c,
              displaySensitiveMedia: s,
              isCardArticle: I,
              isForwardNavigation: u,
              isNsfwUser: h,
              isPinned: p,
              loggedInUser: _,
              promotedContentAdvertiser: v,
              quoteTweetSocialContextProps: T && Object(q.e)(T),
              shouldShowDownvoteFullscreenEducation: w,
              socialContext: d || k,
              topic: f,
              tweet: b,
              userCountry: C,
              userLanguage: y,
              withCommunityModerationAuthority: Object(E.c)(null == a ? void 0 : a.role),
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: R.w,
              addToast: T.b,
              block: N.e.block,
              createLocalApiErrorHandler: Object(B.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_DETAIL_CONTAINER',
              ),
              fetchAdFreeToken: j.a,
              fetchCommunityIfNeeded: S.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: U.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: j.b,
              log: I.a,
              mute: x.a,
              updateHeadsUp: M.a.updateHeadsUp,
              richScribeAction: F.richScribeAction,
              setArticlesVisited: L.e,
              unblock: N.e.unblock,
              undoTopicNotInterested: U.a.undoNotInterested,
              unmute: N.e.unmute,
            }
          }),
        ne = (n('JtPf'), n('zb92')),
        oe = Object(ne.a)({
          loader: function () {
            return n.e(208).then(n.bind(null, '5Yok'))
          },
        }),
        ie = (n('uFXj'), n('IqLm')),
        re = n('Irs7'),
        ae = n('MWbm'),
        le = n('3XMw'),
        ce = n.n(le),
        se = n('4zmP'),
        de = n('rHpw'),
        ue = ce.a.ac2844f1,
        he = ce.a.b4e042b9,
        pe = ce.a.i859a9d3,
        _e = de.a.create(function (e) {
          return {
            root: { borderTopWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: 'solid' },
            callout: { margin: e.spaces.space8, width: 'auto' },
          }
        }),
        ve = function (e) {
          var t = e.onAction,
            n = e.onClose,
            o = Object(re.b)()
          k.a.useEffect(
            function () {
              o.scribe({ section: 'reply_voting_nux', element: 'pre_downvote', action: 'impression' })
            },
            [o],
          )
          var i = k.a.createElement(
            ce.a.I18NFormatMessage,
            { $i18n: 'id9ba4fb' },
            k.a.createElement(ie.a, { accessibilityLabel: he }),
          )
          return k.a.createElement(
            ae.a,
            { style: _e.root },
            k.a.createElement(se.a, {
              action: { label: pe, link: '' },
              headline: ue,
              onAction: t,
              onClose: n,
              style: _e.callout,
              text: i,
              withCloseButton: !0,
            }),
          )
        },
        me = n('6bZg'),
        we = n('LSr9'),
        fe = n('RuTB'),
        be = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(5), n.e(6), n.e(12), n.e(81)]).then(n.bind(null, 'x8Sc'))
          },
          renderPlaceholder: function (e, t) {
            return k.a.createElement(fe.a, { hasError: e, onRetry: t })
          },
        }),
        Ce = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(87)]).then(n.bind(null, 'RrO2'))
          },
          renderPlaceholder: function (e, t) {
            return k.a.createElement(fe.a, { hasError: e, onRetry: t })
          },
        }),
        ye = n('iFPY'),
        ke = n('hACr'),
        ge = n('Nh1N'),
        Ie = ce.a.de21174c,
        Ae = ce.a.haebcf51,
        Te = ce.a.i859a9d3,
        Ee = de.a.create(function (e) {
          return { callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } }
        }),
        Se = function () {
          return k.a.createElement(
            ae.a,
            { style: Ee.callout },
            k.a.createElement(se.a, {
              Icon: ge.a,
              action: {
                label: Te,
                link: 'https://help.twitter.com/using-twitter/mentions-and-replies#mention-control',
              },
              headline: Ie,
              text: Ae,
              type: 'primary',
            }),
          )
        },
        xe = n('jQy5'),
        Pe = n('vMOa'),
        De = n('Rp9C'),
        Fe = n('xM7j'),
        Oe = n('BLtI'),
        Ue = n('3zeG'),
        Me = n('aITJ'),
        Ne = n('TnY3'),
        Re = n('mqpi'),
        Le = n('v6aA'),
        He = n('E0cF'),
        Be = n('OIC0'),
        je = n('+pKb'),
        qe = n('/Ikv'),
        Ke = n('7JQg'),
        Ve = n('cFuS'),
        We = n('24HD'),
        Ge = n('fz3c'),
        ze = n('4hQ9'),
        Je = n('oQhu'),
        Ye = n('mN6z'),
        Ze = n('ONCy'),
        Qe = n('Cqiq'),
        Xe = ce.a.f277e949
      function $e(e, t, n) {
        var o = De.a.addTweetToItems(n ? n.items : [], e, t)
        return C()(C()({}, n || {}), {}, { items: o })
      }
      var et = (function (e) {
        _()(n, e)
        var t = m()(n)
        function n() {
          var e, o, i
          c()(this, n)
          for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s]
          return (
            (i = t.call.apply(t, [this].concat(l))),
            f()(h()(i), 'state', {
              displayReported: !1,
              enableKeyboardShortcuts: !1,
              showDownvoteFullscreenFromInline: !1,
              replyPressToggle: !1,
              showBlockOrUnblockConfirmation: !1,
            }),
            f()(h()(i), '_shouldDisable', Re.b.bind(null, i.context.featureSwitches)),
            f()(h()(i), '_downvoteEnabled', i.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
            f()(
              h()(i),
              '_isArticleNudgeEnabled',
              i.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
            ),
            f()(h()(i), '_isCommunitiesEnabled', i.context.featureSwitches.isTrue('c9s_enabled')),
            f()(
              h()(i),
              '_hasClaimsForAdFreeArticles',
              null === (e = i.context.userClaims) || void 0 === e
                ? void 0
                : e.isTrueAndEnabled('subscriptions_feature_1006'),
            ),
            f()(
              h()(i),
              '_conversationHeadsUpFSValue',
              null === (o = i.context.featureSwitches) || void 0 === o
                ? void 0
                : o.getStringValue('conversational_safety_heads_up_treatment_A_enabled'),
            ),
            f()(
              h()(i),
              '_downvoteNuxDays',
              i.context.featureSwitches.getNumberValue('rweb_reply_downvote_nux_inline_days'),
            ),
            f()(
              h()(i),
              '_getScribeData',
              Object(Je.a)(function (e, t, n) {
                var o = $e(e, t, n)
                return (
                  (i._cachedScribeData && Object(Ye.a)(o, i._cachedScribeData)) || (i._cachedScribeData = o),
                  i._cachedScribeData
                )
              }),
            ),
            f()(h()(i), '_renderConversationControlsTooltip', function () {
              var e = i.context.loggedInUserId,
                t = i.props.tweet
              if (!t) return !1
              var n = He.a.getOriginalTweet(t),
                o = !!n.community_id_str,
                r = n.user.id_str === e,
                a = n.reply_count > 0
              return r && a && !n.in_reply_to_status_id_str && !o
            }),
            f()(h()(i), '_renderBlockOrUnblockConfirmationSheet', function () {
              var e = i.props.tweet
              if (!e) return null
              var t = e.user
              return Object(We.j)({
                confirmation: Object(We.h)(t),
                onClose: i._handleBlockOrUnblockConfirmClose,
                handleConfirm: i._handleBlockOrUnblockUserConfirm,
              })
            }),
            f()(h()(i), '_shouldShowDownvoteInlineEducation', function () {
              var e = i.props.daysSinceDownvoteEducation
              return i._allowDownvoteEducations() && null !== e && e >= i._downvoteNuxDays
            }),
            f()(h()(i), '_shouldShowDownvoteFullscreenEducation', function () {
              var e = i.props,
                t = e.isForwardNavigation,
                n = e.shouldShowDownvoteFullscreenEducation
              return t && i._allowDownvoteEducations() && n
            }),
            f()(h()(i), '_allowDownvoteEducations', function () {
              var e = i.props,
                t = e.loggedInUser,
                n = e.tweet,
                o = new Date()
              o.setDate(o.getDate() - 14)
              var r = t && new Date(null == t ? void 0 : t.created_at) < o
              return (
                i._downvoteEnabled &&
                t &&
                r &&
                n &&
                n.reply_count >= 10 &&
                !n.self_thread &&
                !n.softIntervention &&
                !n.tombstoneInfo
              )
            }),
            f()(h()(i), '_getInlineCalloutInfo', function () {
              var e = i.props,
                t = e.displaySensitiveMedia,
                n = e.isNsfwUser,
                o = e.scribeNamespace,
                r = e.tweet,
                a = e.userCountry,
                l = e.userLanguage,
                c = i.context,
                s = c.featureSwitches,
                d = c.loggedInUserId
              if (
                r &&
                Object(ze.e)({
                  displaySensitiveMedia: t,
                  featureSwitches: s,
                  isNsfwUser: n,
                  loggedInUserId: d,
                  tweet: r,
                  userCountry: a,
                  userLanguage: l,
                })
              )
                return Object(ze.d)(r, o)
            }),
            f()(h()(i), '_handleReplyPress', function () {
              i.setState({ replyPressToggle: !i.state.replyPressToggle })
            }),
            f()(h()(i), '_handleModeratedIconClick', function () {
              return i._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
            }),
            f()(h()(i), '_handleModeratedIconShown', function () {
              return i._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
            }),
            f()(h()(i), '_handleBirdwatchNotesIconClick', function () {
              return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
            }),
            f()(h()(i), '_handleBirdwatchNotesIconShown', function () {
              return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
            }),
            f()(h()(i), '_handleFocus', function () {
              i.setState({ enableKeyboardShortcuts: !0 })
            }),
            f()(h()(i), '_handleBlur', function () {
              i.setState({ enableKeyboardShortcuts: !1 })
            }),
            f()(h()(i), '_handleShowReportedTweet', function () {
              i.setState({ displayReported: !0 })
            }),
            f()(h()(i), '_getShortcutKeyHandlers', function () {
              var e = i._getMuteOrUnmuteAction(),
                t = e.onClick,
                n = e.shortcutKey,
                o = i._getBlockOrUnblockAction().shortcutKey,
                r = i.context.loggedInUserId,
                a = i.props.tweet
              if (!a) return {}
              var l = a.user.id_str === r
              return C()(C()({}, n && f()({}, n, t)), o && !l && f()({}, o, i._handleBlockOrUnblockConfirmOpen))
            }),
            f()(h()(i), '_handleBlockOrUnblockConfirmOpen', function () {
              i.setState({ showBlockOrUnblockConfirmation: !0 })
            }),
            f()(h()(i), '_handleBlockOrUnblockConfirmClose', function () {
              i.setState({ showBlockOrUnblockConfirmation: !1 })
            }),
            f()(h()(i), '_handleBlockOrUnblockUserConfirm', function () {
              var e = i._getBlockOrUnblockAction().onClick
              i._handleBlockOrUnblockConfirmClose(), e && e()
            }),
            f()(h()(i), '_getBlockOrUnblockAction', function () {
              var e = i.props,
                t = e.addToast,
                n = e.block,
                o = e.contextualBehavioralEventInfo,
                r = e.createLocalApiErrorHandler,
                a = e.promotedContent,
                l = e.tweet,
                c = e.unblock
              if (!l) return {}
              var s = l.user,
                d = {
                  addToast: t,
                  behavioralEventEntityToken: null == o ? void 0 : o.entityToken,
                  createLocalApiErrorHandler: r,
                  scribeAction: function (e) {
                    var t = e.element
                    i._scribeAction({ element: t, action: 'click' })
                  },
                }
              return Object(g.a)(C()(C()({}, d), {}, { block: n, unblock: c, user: s, promotedContent: a }))
            }),
            f()(h()(i), '_getMuteOrUnmuteAction', function () {
              var e = i.props,
                t = e.addToast,
                n = e.contextualBehavioralEventInfo,
                o = e.createLocalApiErrorHandler,
                r = e.mute,
                a = e.promotedContent,
                l = e.tweet,
                c = e.unmute
              if (!l) return {}
              var s = l.user,
                d = {
                  addToast: t,
                  behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                  createLocalApiErrorHandler: o,
                  scribeAction: function (e) {
                    var t = e.element
                    i._scribeAction({ element: t, action: 'click' })
                  },
                }
              return Object(xe.a)(C()(C()({}, d), {}, { mute: r, unmute: c, user: s, promotedContent: a }))
            }),
            f()(
              h()(i),
              '_getRenderCurationActionMenu',
              Object(Je.a)(function (e, t, n, o, i, r, a, l, c, s, d, u, h, p, _, v) {
                return function () {
                  return (
                    !!c &&
                    k.a.createElement(Ue.a, {
                      behavioralEventEntityToken: p,
                      forwardPivotDisplayType: e,
                      isNsfwUser: n,
                      isPinned: o,
                      onDeleteTweet: function () {
                        var e = i.state || {},
                          n = e.fromApp,
                          o = e.usedFallback
                        n && !o ? t.goBack() : t.push('/')
                      },
                      onMenuClick: r,
                      onTweetDismiss: a,
                      promotedContent: l,
                      tweet: c,
                      userCountry: _,
                      userLanguage: v,
                      withChangeConversationControls: s,
                      withChangeConversationControlsTooltip: d,
                      withCommunityModerationAuthority: h,
                      withHideReply: u,
                      withMuteConversation: !0,
                      withViewHiddenReplies: !0,
                    })
                  )
                }
              }),
            ),
            f()(h()(i), '_scribeAction', function (e, t, n, o) {
              var r = i.props,
                a = r.promotedContent,
                l = r.richScribeAction,
                c = r.scribeNamespace,
                s = r.tweet,
                d = s ? De.a.forTweet(s, a) : void 0,
                u = o ? C()(C()({}, d), {}, { article_details: { is_ad_free: o } }) : d,
                h = C()(C()({ items: u ? [u] : [] }, Object(Ze.a)(n ? { click_tracking_embed_details: n } : null)), t)
              l(C()(C()({}, c), e), h)
            }),
            f()(h()(i), '_handleReplyContextClick', function (e, t) {
              i._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
            }),
            f()(h()(i), '_handlePromotedIndicatorClick', function () {
              i._handleAsyncPromotedEvent(Ve.b.FOOTER_PROFILE)
            }),
            f()(h()(i), '_handleMediaClick', function () {
              i._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                i._handleAsyncPromotedEvent(Ve.b.EMBEDDED_MEDIA)
            }),
            f()(h()(i), '_handleEntityClick', function (e, t, n) {
              var o = i.props,
                r = o.adFreeArticleDomains,
                l = o.createLocalApiErrorHandler,
                c = o.fetchAdFreeToken,
                s = o.tweet,
                d = Ve.a[t],
                u = me.a[t],
                h = De.a.getClickTrackingEmbedDetails(i.props.promotedContent, n)
              if (d) {
                var p =
                  d === Ve.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                    ? { url: e.currentTarget.href }
                    : void 0
                i._handleAsyncPromotedEvent(d, p)
              }
              t === Be.a.URL && h && i._scribeAction({ action: je.b.CLICK_ID_EMBED }, void 0, h)
              var _ = !1
              if (i._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                var v = new URL(n.expandedUrl).hostname,
                  m = new we.a(c, l()).getAdFreeArticlesClickHandler({
                    destinationUrl: n.embeddedUrl,
                    linkDomain: v,
                    adFreeArticleDomains: r,
                    tweetAuthorUserId: null == s ? void 0 : s.user.id_str,
                  }),
                  w = a()(m, 2),
                  f = w[0],
                  b = w[1]
                f && (b(e), (_ = !0))
              }
              if (t === Be.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                return i._scribeAction(
                  { element: 'interactive_text', action: u },
                  { interactive_text_details: { id: n.id } },
                  void 0,
                  _,
                )
              u && i._scribeAction({ action: u }, void 0, void 0, _)
            }),
            f()(h()(i), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
              return function () {
                i._scribeAction({ component: e, element: 'learn_more', action: 'click' })
              }
            }),
            f()(h()(i), '_handlePoliticalSponsorWebsiteClick', function () {
              i._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
            }),
            f()(h()(i), '_handleAnalyticsClick', function () {
              i._scribeAction({ element: 'analytics', action: 'click' })
            }),
            f()(h()(i), '_handlePromoteButtonClick', function () {
              i._scribeAction({ element: 'promote', action: 'click' })
            }),
            f()(h()(i), '_handlePromoteAgainButtonClick', function () {
              i._scribeAction({ element: 'promote_again', action: 'click' })
            }),
            f()(h()(i), '_handleAvatarClick', function () {
              var e = i.props.tweet
              i._scribeAction(
                { element: 'avatar', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                i._handleAsyncPromotedEvent(Ve.b.PROFILE_IMAGE_CLICK)
            }),
            f()(h()(i), '_handleScreenNameClick', function () {
              var e = i.props.tweet
              i._scribeAction(
                { element: 'user', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                i._handleAsyncPromotedEvent(Ve.b.SCREEN_NAME_CLICK)
            }),
            f()(h()(i), '_handleCaretClick', function () {
              i._scribeAction({ element: 'caret', action: 'click' })
            }),
            f()(h()(i), '_handleCommunityFetch', function () {
              var e = i.props,
                t = e.createLocalApiErrorHandler,
                n = e.fetchCommunityIfNeeded,
                o = e.tweet
              if (o && i._isCommunitiesEnabled) {
                var r,
                  a = o.community_id_str,
                  l = null === (r = o.quoted_status) || void 0 === r ? void 0 : r.community_id_str
                a && n(a).catch(t()), l && n(l).catch(t())
              }
            }),
            f()(h()(i), '_handleHeadsUpRender', function () {
              var e = i.props,
                t = e.conversationAnnotation,
                n = e.tweet,
                o = e.updateHeadsUp
              if (!n) return null
              var r = He.a.getOriginalTweet(n),
                a = (null == r ? void 0 : r.reply_count) > 20
              if (!('Political' === (null == t ? void 0 : t.conversation_annotation_type) && a)) return null
              o(r.id_str)
            }),
            f()(h()(i), '_handleTopicFetch', function () {
              var e,
                t = i.props,
                n = t.createLocalApiErrorHandler,
                o = t.fetchTopicIfNeeded,
                r = t.socialContext,
                a = null == r || null === (e = r.topicContext) || void 0 === e ? void 0 : e.topicId
              a && o(a).catch(n())
            }),
            f()(h()(i), '_handleUndoTopicNotInterested', function () {
              var e = i.props,
                t = e.createLocalApiErrorHandler,
                n = e.topic,
                o = e.undoTopicNotInterested
              i._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && o(n.id).catch(t())
            }),
            f()(h()(i), '_handleCardLinkClick', function (e) {
              var t,
                n = i.props,
                o = n.adFreeArticleDomains,
                r = n.createLocalApiErrorHandler,
                l = n.fetchAdFreeToken,
                c = n.isCardArticle,
                s = n.setArticlesVisited,
                d = n.tweet
              if (i._isArticleNudgeEnabled && c) {
                var u,
                  h,
                  p = null == d || null === (u = d.card) || void 0 === u ? void 0 : u.url
                if (p)
                  s(p),
                    i._scribeAction(
                      { component: 'article_nudge', element: 'read_article', action: 'click' },
                      {
                        items: [
                          {
                            token: null == d || null === (h = d.card) || void 0 === h ? void 0 : h.url,
                            in_reply_to_tweet_id: null == d ? void 0 : d.id_str,
                          },
                        ],
                      },
                    )
              }
              var _ = null == d || null === (t = d.card) || void 0 === t ? void 0 : t.binding_values
              if (i._hasClaimsForAdFreeArticles && _) {
                var v = new we.a(l, r()).getAdFreeArticlesClickHandler({
                    destinationUrl: qe.a.getBindingValue(_, 'card_url'),
                    linkDomain: qe.a.getBindingValue(_, 'domain'),
                    adFreeArticleDomains: o,
                  }),
                  m = a()(v, 2),
                  w = m[0],
                  f = m[1]
                w && f(e)
              }
            }),
            f()(h()(i), '_handleMediaHashtagHighlightClick', function () {
              i._handleAsyncPromotedEvent(Ve.b.HASHTAG_CLICK)
            }),
            i
          )
        }
        return (
          d()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._handleTopicFetch(),
                  this._handleCommunityFetch(),
                  this._handleHeadsUpRender(),
                  this._hasClaimsForAdFreeArticles && this.props.loadAdFreeArticleDomainsFromPersistence()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.tweet &&
                  e.tweet &&
                  !e.tweet.user.blocking &&
                  this.props.tweet.user.blocking &&
                  this.props.history.goBack({ backLocation: '/' })
                this.props.conversationAnnotation !== e.conversationAnnotation && this._handleHeadsUpRender()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                var e = this.props.addFlag
                this._shouldShowDownvoteInlineEducation() && e(R.k, { updateTimestamp: !0 })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.context.loggedInUserId,
                  t = this.props.tweet
                if (!t) return null
                var n = t.user.id_str === e,
                  o = Object(Qe.b)(t.withheld_scope),
                  i = Object(Ge.h)(t) && !this.state.displayReported
                return k.a.createElement(
                  k.a.Fragment,
                  null,
                  o
                    ? k.a.createElement(
                        ae.a,
                        null,
                        this._renderWithheldTweet(),
                        n ? this._renderTweetComponent() : null,
                      )
                    : i
                    ? this._renderReportedTombstone()
                    : this._renderTweetComponent(),
                  this._renderIntentPrompt(),
                  this.state.showBlockOrUnblockConfirmation && !n
                    ? this._renderBlockOrUnblockConfirmationSheet()
                    : null,
                )
              },
            },
            {
              key: '_renderIntentPrompt',
              value: function () {
                var e = this.props,
                  t = e.forwardPivotInfo,
                  n = e.history,
                  o = e.tweet
                if (o && n.location.pathname.indexOf('/intent/') > -1)
                  return k.a.createElement(ye.a, {
                    forwardPivotInfo: t,
                    history: n,
                    location: n.location,
                    tweetId: o.id_str,
                  })
              },
            },
            {
              key: '_renderTweetComponent',
              value: function () {
                var e,
                  t = this.props,
                  n = t.allowDownvote,
                  o = t.changeDropdownState,
                  r = t.contextTweet,
                  a = t.contextualBehavioralEventInfo,
                  l = t.conversationAnnotation,
                  c = t.forwardPivotInfo,
                  s = t.hasModeratedReplies,
                  d = t.history,
                  u = t.innerForwardPivotInfo,
                  h = t.isNsfwUser,
                  p = t.isPinned,
                  _ = t.location,
                  v = t.loggedInUser,
                  m = t.onTweetDismiss,
                  w = t.promotedContent,
                  f = t.promotedContentAdvertiser,
                  b = t.quoteTweetSocialContextProps,
                  C = t.quotedTweetTombstoneInfo,
                  y = t.readerModeAvailable,
                  g = t.replyDropdownSelection,
                  I = t.scribeData,
                  A = t.scribeNamespace,
                  T = t.socialContext,
                  E = t.topic,
                  S = t.topicFollowPrompt,
                  x = t.tweet,
                  P = t.userCountry,
                  D = t.userLanguage,
                  F = t.withActions,
                  O = t.withCommunityModerationAuthority,
                  U = t.withHideReply,
                  M = t.withInlineMedia,
                  N = t.withSocialContext,
                  R = this.context.loggedInUserId,
                  L = {
                    allowDownvote: n,
                    contextTweet: r,
                    forwardPivotInfo: c,
                    hasModeratedReplies: s,
                    innerForwardPivotInfo: u,
                    promotedContent: w,
                    promotedContentAdvertiser: f,
                    quotedTweetTombstoneInfo: C,
                    quoteTweetSocialContextProps: b,
                    readerModeAvailable: y,
                    socialContext: T,
                    topic: E,
                    topicFollowPrompt: S,
                    tweet: x,
                    withActions: F,
                    withInlineMedia: M,
                    withSocialContext: N,
                  },
                  H = this.state.enableKeyboardShortcuts
                if (!x) return null
                var B = Object(Ye.a)(this._cachedScribeNamespace, A)
                    ? this._cachedScribeNamespace
                    : (this._cachedScribeNamespace = A),
                  j = x && x.card && !x.is_quote_status ? x.card.url : void 0,
                  q = He.a.getOriginalTweet(x),
                  K = q.user.id_str === R,
                  V = !q.in_reply_to_status_id_str && K && !q.community_id_str,
                  W = this._renderConversationControlsTooltip(),
                  G = !!q.in_reply_to_status_id_str,
                  z = (null == q ? void 0 : q.reply_count) > 20,
                  J =
                    'Political' === (null == l ? void 0 : l.conversation_annotation_type) &&
                    (null === (e = x.headsUp) || void 0 === e ? void 0 : e.showBanner) &&
                    !G &&
                    z,
                  Y =
                    this.context.featureSwitches.isTrue(
                      'responsive_web_deamplification_replies_dropdown_selector_enabled',
                    ) && x.reply_count > 0
                return k.a.createElement(
                  Ke.c,
                  { data: this._getScribeData(x.retweeted_status || x, w, I), namespace: B },
                  k.a.createElement(
                    ke.a,
                    { enabled: !!H, handlers: this._getShortcutKeyHandlers() },
                    this._renderLeftConversationBanner(),
                    k.a.createElement(
                      Oe.b,
                      i()({}, L, {
                        enableKeyboardShortcuts: H,
                        excludeCardUrl: j,
                        inlineCalloutInfo: this._getInlineCalloutInfo(),
                        isFocal: !0,
                        loggedInUser: v,
                        onAnalyticsClick: this._handleAnalyticsClick,
                        onAvatarClick: this._handleAvatarClick,
                        onBirdwatchNotesIconClick: this._handleBirdwatchNotesIconClick,
                        onBirdwatchNotesIconShown: this._handleBirdwatchNotesIconShown,
                        onBlur: this._handleBlur,
                        onCardLinkClick: this._handleCardLinkClick,
                        onEntityClick: this._handleEntityClick,
                        onFocus: this._handleFocus,
                        onMediaClick: this._handleMediaClick,
                        onMediaHashtagHighlightClick: this._handleMediaHashtagHighlightClick,
                        onModeratedIconClick: this._handleModeratedIconClick,
                        onModeratedIconShown: this._handleModeratedIconShown,
                        onPoliticalSponsorWebsiteClick: this._handlePoliticalSponsorWebsiteClick,
                        onPromoteAgainButtonClick: this._handlePromoteAgainButtonClick,
                        onPromoteButtonClick: this._handlePromoteButtonClick,
                        onPromotedDisclaimerLearnMoreClick: this._handlePromotedDisclaimerLearnMoreClick,
                        onPromotedIndicatorClick: this._handlePromotedIndicatorClick,
                        onReplyContextClick: this._handleReplyContextClick,
                        onReplyPress: this._handleReplyPress,
                        onScreenNameClick: this._handleScreenNameClick,
                        onUndoTopicNotInterestedClick: this._handleUndoTopicNotInterested,
                        renderCurationActionMenu: this._getRenderCurationActionMenu(
                          null == c ? void 0 : c.displayType,
                          d,
                          h,
                          p,
                          _,
                          this._handleCaretClick,
                          m,
                          w,
                          He.a.getOriginalTweet(x),
                          V,
                          W,
                          U,
                          O,
                          null == a ? void 0 : a.entityToken,
                          P,
                          D,
                        ),
                        showConversationHeadsUp: J,
                        tweet: x,
                      }),
                    ),
                    Y ? k.a.createElement(Pe.a, { changeDropdownState: o, replyDropdownSelection: g }) : null,
                    this._renderInlineReply(),
                    this._renderDownvoteEducation(),
                  ),
                )
              },
            },
            {
              key: '_renderLeftConversationBanner',
              value: function () {
                var e,
                  t = this.props.tweet,
                  n = this.context.loggedInUserId
                return (null == t || null === (e = t.unmentioned_user_ids) || void 0 === e ? void 0 : e.includes(n))
                  ? k.a.createElement(Se, null)
                  : null
              },
            },
            {
              key: '_renderDownvoteEducation',
              value: function () {
                var e = this,
                  t = this.props.addFlag,
                  n = this.state.showDownvoteFullscreenFromInline
                return k.a.createElement(
                  k.a.Fragment,
                  null,
                  n || this._shouldShowDownvoteFullscreenEducation()
                    ? k.a.createElement(oe, {
                        onDismiss: function () {
                          n ? e.setState({ showDownvoteFullscreenFromInline: !1 }) : t(R.k)
                        },
                      })
                    : null,
                  this._shouldShowDownvoteInlineEducation()
                    ? k.a.createElement(ve, {
                        onAction: function () {
                          e.setState({ showDownvoteFullscreenFromInline: !0 })
                        },
                        onClose: function () {
                          t(R.k, { updateTimestamp: !0 })
                        },
                      })
                    : null,
                )
              },
            },
            {
              key: '_renderInlineReply',
              value: function () {
                var e = this.props,
                  t = e.history,
                  n = e.location,
                  o = e.tweet,
                  i = e.tweetId,
                  r = this.state.replyPressToggle,
                  a = this.context.loggedInUserId
                if (!o) return null
                var l = a && !this._shouldDisable(o, Re.a.Reply),
                  c = Me.b.isMobileOS() ? be : Ce
                return l
                  ? k.a.createElement(c, { history: t, location: n, parentTweetId: i, replyPressToggle: r })
                  : null
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props.tweet
                return (
                  !!e &&
                  k.a.createElement(Qe.a, {
                    displayTextRange: e.display_text_range,
                    entities: e.withheld_entities || e.entities,
                    lang: e.lang,
                    text: e.withheld_text || e.text,
                  })
                )
              },
            },
            {
              key: '_renderReportedTombstone',
              value: function () {
                var e = this.props.tweet
                if (e) {
                  var t = He.a.getOriginalTweet(e),
                    n = Object(Ge.c)(t.reportingVisibility)
                  return k.a.createElement(
                    Fe.a,
                    { actionText: Xe, lang: e.lang, onClick: this._handleShowReportedTweet },
                    n,
                  )
                }
              },
            },
            {
              key: '_handleAsyncPromotedEvent',
              value: function (e, t) {
                var n = this.props,
                  o = n.createLocalApiErrorHandler,
                  i = n.log,
                  r = n.promotedContent,
                  a = n.tweet
                if (a && r) {
                  var l = r.disclosure_type,
                    c = r.impression_id
                  i({
                    disclosureType: l,
                    itemId: a.id_str,
                    itemType: 'tweet',
                    params: C()({ event: e, impression_id: c }, t),
                  }).catch(o())
                }
              },
            },
          ]),
          n
        )
      })(k.a.Component)
      f()(et, 'contextType', Le.a)
      var tt = Object(Ne.a)(te(et))
      t.b = Object(Ke.a)({ component: 'tweet' })(tt)
    },
  },
])
//# sourceMappingURL=WIPED
