;(window.webpackJsonp = window.webpackJsonp || []).push([
  [352],
  {
    '3zeG': function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')
      var o = n('zb92'),
        i = Object(o.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(187)]).then(n.bind(null, 'MzK7'))
          },
        })
      t.a = i
    },
    '68+r': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var o,
        i = n('KEM+'),
        r = n.n(i),
        a = n('k49u'),
        c = n('3XMw'),
        l = n.n(c).a.ed428a75,
        s = ((o = {}), r()(o, a.a.NotMutingTargetUser, { toast: { text: l } }), r()(o, 'showToast', !0), o)
    },
    '6bZg': function (e, t, n) {
      'use strict'
      var o,
        i = n('KEM+'),
        r = n.n(i),
        a = n('OIC0')
      t.a =
        ((o = {}),
        r()(o, a.a.CASHTAG, void 0),
        r()(o, a.a.EMOJI, void 0),
        r()(o, a.a.HASHTAG, 'hashtag_click'),
        r()(o, a.a.INTERACTIVE_HIGHLIGHT, 'highlight_click'),
        r()(o, a.a.MEDIA, void 0),
        r()(o, a.a.MENTION, 'mention_click'),
        r()(o, a.a.TEXT, void 0),
        r()(o, a.a.URL, 'open_link'),
        o)
    },
    'NO+D': function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('ddV6'),
        c = n.n(a),
        l = n('ERkP'),
        s = n.n(l),
        d = n('rxPX'),
        u = Object(d.a)().propsFromActions(function (e) {
          return { applyFeedbackAction: e.module.applyFeedbackAction }
        }),
        h = n('rcen'),
        _ = n('xM7j'),
        p = n('xZXe'),
        m = n('P1oR'),
        v = n('kY28'),
        w = function (e) {
          var t = e.alignment,
            n = e.entities,
            o = e.rtl,
            i = e.text
          return s.a.createElement(h.a, { alignment: t, entities: n, rtl: o, text: i })
        },
        f = function (e) {
          var t = e.applyFeedbackAction,
            n = e.entry,
            o = e.isFocalTweet,
            i = e.isReaderMode,
            r = e.tweetDismissFeedbackKey,
            a = e.withHideReply,
            l = n.content,
            d = l.tombstoneInfo,
            u = (d = void 0 === d ? {} : d).revealText,
            h = d.richRevealText,
            f = d.richText,
            b = d.text,
            C = l.tweet,
            k = (C = void 0 === C ? {} : C).forwardPivot,
            y = C.id,
            g = C.innerForwardPivot,
            T = C.innerTombstoneInfo,
            I = n.conversationPosition,
            A = n.conversationTreeMetadata,
            E = n.referringContext,
            S = (E = void 0 === E ? {} : E).contextTweetId,
            x = E.socialContext,
            P = h ? w(h) : u,
            O = f ? w(f) : b,
            F = s.a.useState(!0),
            D = c()(F, 2),
            U = D[0],
            M = D[1]
          s.a.useEffect(
            function () {
              M(!0)
            },
            [y],
          )
          var L = s.a.useCallback(function () {
              M(!1)
            }, []),
            R = s.a.useCallback(
              function () {
                r && t({ entry: n, feedbackKeys: [r] })
              },
              [t, n, r],
            )
          return U || !y
            ? s.a.createElement(_.a, {
                actionText: P,
                children: O,
                conversationPosition: I,
                conversationTreeMetadata: A,
                onClick: L,
              })
            : y
            ? o && !i
              ? s.a.createElement(m.b, {
                  contextTweetId: S,
                  forwardPivotInfo: k,
                  innerForwardPivotInfo: g,
                  onTweetDismiss: R,
                  quotedTweetTombstoneInfo: T,
                  socialContext: x,
                  tweetId: y,
                  withHideReply: a,
                })
              : s.a.createElement(p.b, {
                  conversationPosition: I,
                  conversationTreeMetadata: A,
                  displayBlocked: !0,
                  displayPromotedContent: !0,
                  forwardPivotInfo: k,
                  innerForwardPivotInfo: g,
                  isReaderMode: i,
                  onTweetDismiss: R,
                  quotedTweetTombstoneInfo: T,
                  replyContext: i ? v.a.ReplyContextTypes.None : void 0,
                  shouldSelfThreadIncludeAvatar: !0,
                  tweetId: y,
                  withActions: !0,
                  withHideReply: a,
                  withInlineMedia: !0,
                  withSocialContext: !0,
                })
            : null
        },
        b = u(s.a.memo(f))
      t.default = function (e) {
        return r
          .b({
            component: b,
            shouldDisplayBorder: function (e) {
              var t = e.conversationPosition,
                n = e.treeDisplay
              return 'VerticalConversation' !== (null == n ? void 0 : n.displayType) && (!t || !!t.isEnd)
            },
          })
          .getHandler(function () {
            return i()({}, e)
          })
      }
    },
    P1oR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return nt
      })
      var o = n('97Jx'),
        i = n.n(o),
        r = n('ddV6'),
        a = n.n(r),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        h = n.n(u),
        _ = n('5Yy7'),
        p = n.n(_),
        m = n('2VqO'),
        v = n.n(m),
        w = n('KEM+'),
        f = n.n(w),
        b = n('yiKp'),
        C = n.n(b),
        k =
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
        y = n.n(k),
        g = n('TZwD'),
        T = n('6rlp'),
        I = n('RqPI'),
        A = n('1YZw'),
        E = n('Ig1G'),
        S = n('eSoz'),
        x = n('0pUJ'),
        P = n('Z6aJ'),
        O = n('SrIh'),
        F = n('Fmkq'),
        D = n('j7tW'),
        U = n('Zejx'),
        M = n('XOJV'),
        L = n('G6rE'),
        R = n('xZGM'),
        N = n('jL08'),
        B = n('rxPX'),
        H = n('0KEI'),
        j = n('EGrD'),
        K = n('x5Pi'),
        V = n('P1r1'),
        q = function (e, t) {
          return Object(D.b)(e, t.tweetId)
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
          if (n && n.advertiser) return L.e.select(e, n.advertiser.id_str)
          if (n && P.a.isPromoted(n)) {
            var i = n.advertiser_name
            Object(O.a)('No advertiser info for non-URT promoted tweet', { extra: { advertiser_name: i, tweetId: o } })
          }
        },
        J = function (e, t) {
          return t.socialContext
        },
        Z = function (e, t) {
          var n = t.socialContext,
            o = n && n.topicContext
          return o ? U.a.select(e, o.topicId) : void 0
        },
        Q = function (e, t) {
          var n = M.a.createHydratedTweetSelector(W)(e, t)
          return null != n && n.community_id_str ? S.c.select(e, null == n ? void 0 : n.community_id_str) : void 0
        },
        X = function (e, t) {
          var n = M.a.createHydratedTweetSelector(W)(e, t),
            o = null == n ? void 0 : n.quoted_status,
            i = null == o ? void 0 : o.community_id_str
          return i ? S.c.select(e, i) : void 0
        },
        Y = function (e, t) {
          return 'PUSH' === t.history.action
        },
        $ = function (e, t) {
          return Object(R.D)(e, R.l)
        },
        ee = function (e, t) {
          return Object(R.B)(e, R.l)
        },
        te = Object(B.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: j.c,
              articleDomains: N.b,
              community: Q,
              contextTweet: M.a.createHydratedTweetSelector(G),
              daysSinceDownvoteEducation: ee,
              displaySensitiveMedia: V.k,
              explicitSocialContext: J,
              isForwardNavigation: Y,
              isNsfwUser: V.t,
              isPinned: q,
              loggedInUser: L.e.selectLoggedInUser,
              promotedContentAdvertiser: z,
              quoteTweetCommunity: X,
              shouldShowDownvoteFullscreenEducation: $,
              topic: Z,
              tweet: M.a.createHydratedTweetSelector(W),
              userCountry: I.z,
              userLanguage: I.p,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              o,
              i = e.adFreeArticleDomains,
              r = e.articleDomains,
              a = e.community,
              c = e.contextTweet,
              l = e.daysSinceDownvoteEducation,
              s = e.displaySensitiveMedia,
              d = e.explicitSocialContext,
              u = e.isForwardNavigation,
              h = e.isNsfwUser,
              _ = e.isPinned,
              p = e.loggedInUser,
              m = e.promotedContentAdvertiser,
              v = e.quoteTweetCommunity,
              w = e.shouldShowDownvoteFullscreenEducation,
              f = e.topic,
              b = e.tweet,
              C = e.userCountry,
              k = e.userLanguage,
              y = c
                ? Object(K.f)(c, null == p ? void 0 : p.id_str, a)
                : b
                ? Object(K.f)(b, null == p ? void 0 : p.id_str, a)
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
              T = Object(N.a)(r, g),
              I = null == b ? void 0 : b.quoted_status,
              A = I ? Object(K.f)(I, null == p ? void 0 : p.id_str, v) : void 0
            return {
              adFreeArticleDomains: i,
              community: a,
              contextTweet: c,
              daysSinceDownvoteEducation: l,
              displaySensitiveMedia: s,
              isCardArticle: T,
              isForwardNavigation: u,
              isNsfwUser: h,
              isPinned: _,
              loggedInUser: p,
              promotedContentAdvertiser: m,
              quoteTweetSocialContextProps: A && Object(K.e)(A),
              shouldShowDownvoteFullscreenEducation: w,
              socialContext: d || y,
              topic: f,
              tweet: b,
              userCountry: C,
              userLanguage: k,
              withCommunityModerationAuthority: Object(E.c)(null == a ? void 0 : a.role),
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: R.z,
              addToast: A.b,
              block: L.e.block,
              createLocalApiErrorHandler: Object(H.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_DETAIL_CONTAINER',
              ),
              fetchAdFreeToken: j.a,
              fetchCommunityIfNeeded: S.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: U.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: j.b,
              log: T.a,
              mute: x.a,
              updateHeadsUp: M.a.updateHeadsUp,
              richScribeAction: F.richScribeAction,
              setArticlesVisited: N.e,
              unblock: L.e.unblock,
              undoTopicNotInterested: U.a.undoNotInterested,
              unmute: L.e.unmute,
            }
          }),
        ne = (n('JtPf'), n('zb92')),
        oe = Object(ne.a)({
          loader: function () {
            return n.e(205).then(n.bind(null, '5Yok'))
          },
        }),
        ie = (n('uFXj'), n('IqLm')),
        re = n('Irs7'),
        ae = n('MWbm'),
        ce = n('3XMw'),
        le = n.n(ce),
        se = n('4zmP'),
        de = n('rHpw'),
        ue = le.a.c9370e46,
        he = le.a.b4e042b9,
        _e = le.a.i859a9d3,
        pe = de.a.create(function (e) {
          return {
            root: { borderTopWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: 'solid' },
            callout: { margin: e.spaces.space8, width: 'auto' },
          }
        }),
        me = function (e) {
          var t = e.onAction,
            n = e.onClose,
            o = Object(re.b)()
          y.a.useEffect(
            function () {
              o.scribe({ section: 'reply_voting_nux', element: 'pre_downvote', action: 'impression' })
            },
            [o],
          )
          var i = y.a.createElement(
            le.a.I18NFormatMessage,
            { $i18n: 'id9ba4fb' },
            y.a.createElement(ie.a, { accessibilityLabel: he }),
          )
          return y.a.createElement(
            ae.a,
            { style: pe.root },
            y.a.createElement(se.a, {
              action: { label: _e, link: '' },
              headline: ue,
              onAction: t,
              onClose: n,
              style: pe.callout,
              text: i,
              withCloseButton: !0,
            }),
          )
        },
        ve = n('6bZg'),
        we = n('LSr9'),
        fe = n('RuTB'),
        be = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(6), n.e(9), n.e(78)]).then(n.bind(null, 'x8Sc'))
          },
          renderPlaceholder: function (e, t) {
            return y.a.createElement(fe.a, { hasError: e, onRetry: t })
          },
        }),
        Ce = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(6), n.e(84)]).then(n.bind(null, 'RrO2'))
          },
          renderPlaceholder: function (e, t) {
            return y.a.createElement(fe.a, { hasError: e, onRetry: t })
          },
        }),
        ke = n('iFPY'),
        ye = n('hACr'),
        ge = n('Nh1N'),
        Te = n('FGLp'),
        Ie = le.a.de21174c,
        Ae = le.a.haebcf51,
        Ee = le.a.i859a9d3,
        Se = de.a.create(function (e) {
          return { callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } }
        }),
        xe = function () {
          var e = Object(re.b)()
          return (
            Object(Te.a)(function () {
              e.scribe({ element: 'left_conversation_banner', action: 'impression' })
            }),
            y.a.createElement(
              ae.a,
              { style: Se.callout },
              y.a.createElement(se.a, {
                Icon: ge.a,
                action: {
                  label: Ee,
                  link: 'https://help.twitter.com/using-twitter/mentions-and-replies#mention-control',
                },
                headline: Ie,
                text: Ae,
                type: 'primary',
              }),
            )
          )
        },
        Pe = n('jQy5'),
        Oe = n('vMOa'),
        Fe = n('Rp9C'),
        De = n('xM7j'),
        Ue = n('BLtI'),
        Me = n('3zeG'),
        Le = n('aITJ'),
        Re = n('TnY3'),
        Ne = n('mqpi'),
        Be = n('v6aA'),
        He = n('E0cF'),
        je = n('OIC0'),
        Ke = n('+pKb'),
        Ve = n('/Ikv'),
        qe = n('7JQg'),
        We = n('cFuS'),
        Ge = n('24HD'),
        ze = n('fz3c'),
        Je = n('4hQ9'),
        Ze = n('oQhu'),
        Qe = n('mN6z'),
        Xe = n('ONCy'),
        Ye = n('Cqiq'),
        $e = le.a.f277e949
      function et(e, t, n) {
        var o = Fe.a.addTweetToItems(n ? n.items : [], e, t)
        return C()(C()({}, n || {}), {}, { items: o })
      }
      var tt = (function (e) {
        p()(n, e)
        var t = v()(n)
        function n() {
          var e, o, i
          l()(this, n)
          for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s]
          return (
            (i = t.call.apply(t, [this].concat(c))),
            f()(h()(i), 'state', {
              displayReported: !1,
              enableKeyboardShortcuts: !1,
              showDownvoteFullscreenFromInline: !1,
              replyPressToggle: !1,
              showBlockOrUnblockConfirmation: !1,
            }),
            f()(h()(i), '_shouldDisable', Ne.b.bind(null, i.context.featureSwitches)),
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
              Object(Ze.a)(function (e, t, n) {
                var o = et(e, t, n)
                return (
                  (i._cachedScribeData && Object(Qe.a)(o, i._cachedScribeData)) || (i._cachedScribeData = o),
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
              return Object(Ge.j)({
                confirmation: Object(Ge.h)(t),
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
                c = e.userLanguage,
                l = i.context,
                s = l.featureSwitches,
                d = l.loggedInUserId
              if (
                r &&
                Object(Je.e)({
                  displaySensitiveMedia: t,
                  featureSwitches: s,
                  isNsfwUser: n,
                  loggedInUserId: d,
                  tweet: r,
                  userCountry: a,
                  userLanguage: c,
                })
              )
                return Object(Je.d)(r, o, s)
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
              var c = a.user.id_str === r
              return C()(C()({}, n && f()({}, n, t)), o && !c && f()({}, o, i._handleBlockOrUnblockConfirmOpen))
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
                c = e.tweet,
                l = e.unblock
              if (!c) return {}
              var s = c.user,
                d = {
                  addToast: t,
                  behavioralEventEntityToken: null == o ? void 0 : o.entityToken,
                  createLocalApiErrorHandler: r,
                  scribeAction: function (e) {
                    var t = e.element
                    i._scribeAction({ element: t, action: 'click' })
                  },
                }
              return Object(g.a)(C()(C()({}, d), {}, { block: n, unblock: l, user: s, promotedContent: a }))
            }),
            f()(h()(i), '_getMuteOrUnmuteAction', function () {
              var e = i.props,
                t = e.addToast,
                n = e.contextualBehavioralEventInfo,
                o = e.createLocalApiErrorHandler,
                r = e.mute,
                a = e.promotedContent,
                c = e.tweet,
                l = e.unmute
              if (!c) return {}
              var s = c.user,
                d = {
                  addToast: t,
                  behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                  createLocalApiErrorHandler: o,
                  scribeAction: function (e) {
                    var t = e.element
                    i._scribeAction({ element: t, action: 'click' })
                  },
                }
              return Object(Pe.a)(C()(C()({}, d), {}, { mute: r, unmute: l, user: s, promotedContent: a }))
            }),
            f()(
              h()(i),
              '_getRenderCurationActionMenu',
              Object(Ze.a)(function (e, t, n, o, i, r, a, c, l, s, d, u, h, _, p, m) {
                return function () {
                  return (
                    !!l &&
                    y.a.createElement(Me.a, {
                      behavioralEventEntityToken: _,
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
                      promotedContent: c,
                      tweet: l,
                      userCountry: p,
                      userLanguage: m,
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
                c = r.richScribeAction,
                l = r.scribeNamespace,
                s = r.tweet,
                d = s ? Fe.a.forTweet(s, a) : void 0,
                u = o ? C()(C()({}, d), {}, { article_details: { is_ad_free: o } }) : d,
                h = C()(C()({ items: u ? [u] : [] }, Object(Xe.a)(n ? { click_tracking_embed_details: n } : null)), t)
              c(C()(C()({}, l), e), h)
            }),
            f()(h()(i), '_handleReplyContextClick', function (e, t) {
              i._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
            }),
            f()(h()(i), '_handlePromotedIndicatorClick', function () {
              i._handleAsyncPromotedEvent(We.b.FOOTER_PROFILE)
            }),
            f()(h()(i), '_handleMediaClick', function () {
              i._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                i._handleAsyncPromotedEvent(We.b.EMBEDDED_MEDIA)
            }),
            f()(h()(i), '_handleEntityClick', function (e, t, n) {
              var o = i.props,
                r = o.adFreeArticleDomains,
                c = o.createLocalApiErrorHandler,
                l = o.fetchAdFreeToken,
                s = o.tweet,
                d = We.a[t],
                u = ve.a[t],
                h = Fe.a.getClickTrackingEmbedDetails(i.props.promotedContent, n)
              if (d) {
                var _ =
                  d === We.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                    ? { url: e.currentTarget.href }
                    : void 0
                i._handleAsyncPromotedEvent(d, _)
              }
              t === je.a.URL && h && i._scribeAction({ action: Ke.b.CLICK_ID_EMBED }, void 0, h)
              var p = !1
              if (i._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                var m = new URL(n.expandedUrl).hostname,
                  v = new we.a(l, c()).getAdFreeArticlesClickHandler({
                    destinationUrl: n.embeddedUrl,
                    linkDomain: m,
                    adFreeArticleDomains: r,
                    tweetAuthorUserId: null == s ? void 0 : s.user.id_str,
                  }),
                  w = a()(v, 2),
                  f = w[0],
                  b = w[1]
                f && (b(e), (p = !0))
              }
              if (t === je.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                return i._scribeAction(
                  { element: 'interactive_text', action: u },
                  { interactive_text_details: { id: n.id } },
                  void 0,
                  p,
                )
              u && i._scribeAction({ action: u }, void 0, void 0, p)
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
                i._handleAsyncPromotedEvent(We.b.PROFILE_IMAGE_CLICK)
            }),
            f()(h()(i), '_handleScreenNameClick', function () {
              var e = i.props.tweet
              i._scribeAction(
                { element: 'user', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                i._handleAsyncPromotedEvent(We.b.SCREEN_NAME_CLICK)
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
                  c = null === (r = o.quoted_status) || void 0 === r ? void 0 : r.community_id_str
                a && n(a).catch(t()), c && n(c).catch(t())
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
                c = n.fetchAdFreeToken,
                l = n.isCardArticle,
                s = n.setArticlesVisited,
                d = n.tweet
              if (i._isArticleNudgeEnabled && l) {
                var u,
                  h,
                  _ = null == d || null === (u = d.card) || void 0 === u ? void 0 : u.url
                if (_)
                  s(_),
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
              var p = null == d || null === (t = d.card) || void 0 === t ? void 0 : t.binding_values
              if (i._hasClaimsForAdFreeArticles && p) {
                var m = new we.a(c, r()).getAdFreeArticlesClickHandler({
                    destinationUrl: Ve.a.getBindingValue(p, 'card_url'),
                    linkDomain: Ve.a.getBindingValue(p, 'domain'),
                    adFreeArticleDomains: o,
                  }),
                  v = a()(m, 2),
                  w = v[0],
                  f = v[1]
                w && f(e)
              }
            }),
            f()(h()(i), '_handleMediaHashtagHighlightClick', function () {
              i._handleAsyncPromotedEvent(We.b.HASHTAG_CLICK)
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
                this._shouldShowDownvoteInlineEducation() && e(R.l, { updateTimestamp: !0 })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.context.loggedInUserId,
                  t = this.props.tweet
                if (!t) return null
                var n = t.user.id_str === e,
                  o = Object(Ye.b)(t.withheld_scope),
                  i = Object(ze.h)(t) && !this.state.displayReported
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  o
                    ? y.a.createElement(
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
                  return y.a.createElement(ke.a, {
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
                  c = t.conversationAnnotation,
                  l = t.forwardPivotInfo,
                  s = t.hasModeratedReplies,
                  d = t.history,
                  u = t.innerForwardPivotInfo,
                  h = t.isNsfwUser,
                  _ = t.isPinned,
                  p = t.location,
                  m = t.loggedInUser,
                  v = t.onTweetDismiss,
                  w = t.promotedContent,
                  f = t.promotedContentAdvertiser,
                  b = t.quoteTweetSocialContextProps,
                  C = t.quotedTweetTombstoneInfo,
                  k = t.readerModeAvailable,
                  g = t.replyDropdownSelection,
                  T = t.scribeData,
                  I = t.scribeNamespace,
                  A = t.socialContext,
                  E = t.topic,
                  S = t.topicFollowPrompt,
                  x = t.tweet,
                  P = t.userCountry,
                  O = t.userLanguage,
                  F = t.withActions,
                  D = t.withCommunityModerationAuthority,
                  U = t.withHideReply,
                  M = t.withInlineMedia,
                  L = t.withSocialContext,
                  R = this.context.loggedInUserId,
                  N = {
                    allowDownvote: n,
                    contextTweet: r,
                    forwardPivotInfo: l,
                    hasModeratedReplies: s,
                    innerForwardPivotInfo: u,
                    promotedContent: w,
                    promotedContentAdvertiser: f,
                    quotedTweetTombstoneInfo: C,
                    quoteTweetSocialContextProps: b,
                    readerModeAvailable: k,
                    socialContext: A,
                    topic: E,
                    topicFollowPrompt: S,
                    tweet: x,
                    withActions: F,
                    withInlineMedia: M,
                    withSocialContext: L,
                  },
                  B = this.state.enableKeyboardShortcuts
                if (!x) return null
                var H = Object(Qe.a)(this._cachedScribeNamespace, I)
                    ? this._cachedScribeNamespace
                    : (this._cachedScribeNamespace = I),
                  j = x && x.card && !x.is_quote_status ? x.card.url : void 0,
                  K = He.a.getOriginalTweet(x),
                  V = K.user.id_str === R,
                  q = !K.in_reply_to_status_id_str && V && !K.community_id_str,
                  W = this._renderConversationControlsTooltip(),
                  G = !!K.in_reply_to_status_id_str,
                  z = (null == K ? void 0 : K.reply_count) > 20,
                  J =
                    'Political' === (null == c ? void 0 : c.conversation_annotation_type) &&
                    (null === (e = x.headsUp) || void 0 === e ? void 0 : e.showBanner) &&
                    !G &&
                    z,
                  Z =
                    this.context.featureSwitches.isTrue(
                      'responsive_web_deamplification_replies_dropdown_selector_enabled',
                    ) && x.reply_count > 0
                return y.a.createElement(
                  qe.c,
                  { data: this._getScribeData(x.retweeted_status || x, w, T), namespace: H },
                  y.a.createElement(
                    ye.a,
                    { enabled: !!B, handlers: this._getShortcutKeyHandlers() },
                    this._renderLeftConversationBanner(),
                    y.a.createElement(
                      Ue.b,
                      i()({}, N, {
                        enableKeyboardShortcuts: B,
                        excludeCardUrl: j,
                        inlineCalloutInfo: this._getInlineCalloutInfo(),
                        isFocal: !0,
                        loggedInUser: m,
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
                          null == l ? void 0 : l.displayType,
                          d,
                          h,
                          _,
                          p,
                          this._handleCaretClick,
                          v,
                          w,
                          He.a.getOriginalTweet(x),
                          q,
                          W,
                          U,
                          D,
                          null == a ? void 0 : a.entityToken,
                          P,
                          O,
                        ),
                        showConversationHeadsUp: J,
                        tweet: x,
                      }),
                    ),
                    Z ? y.a.createElement(Oe.a, { changeDropdownState: o, replyDropdownSelection: g }) : null,
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
                  ? y.a.createElement(xe, null)
                  : null
              },
            },
            {
              key: '_renderDownvoteEducation',
              value: function () {
                var e = this,
                  t = this.props.addFlag,
                  n = this.state.showDownvoteFullscreenFromInline
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  n || this._shouldShowDownvoteFullscreenEducation()
                    ? y.a.createElement(oe, {
                        onDismiss: function () {
                          n ? e.setState({ showDownvoteFullscreenFromInline: !1 }) : t(R.l)
                        },
                      })
                    : null,
                  this._shouldShowDownvoteInlineEducation()
                    ? y.a.createElement(me, {
                        onAction: function () {
                          e.setState({ showDownvoteFullscreenFromInline: !0 })
                        },
                        onClose: function () {
                          t(R.l, { updateTimestamp: !0 })
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
                var c = a && !this._shouldDisable(o, Ne.a.Reply),
                  l = Le.b.isMobileOS() ? be : Ce
                return c
                  ? y.a.createElement(l, { history: t, location: n, parentTweetId: i, replyPressToggle: r })
                  : null
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props.tweet
                return (
                  !!e &&
                  y.a.createElement(Ye.a, {
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
                    n = Object(ze.c)(t.reportingVisibility)
                  return y.a.createElement(
                    De.a,
                    { actionText: $e, lang: e.lang, onClick: this._handleShowReportedTweet },
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
                  var c = r.disclosure_type,
                    l = r.impression_id
                  i({
                    disclosureType: c,
                    itemId: a.id_str,
                    itemType: 'tweet',
                    params: C()({ event: e, impression_id: l }, t),
                  }).catch(o())
                }
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      f()(tt, 'contextType', Be.a)
      var nt = Object(Re.a)(te(tt))
      t.b = Object(qe.a)({ component: 'tweet' })(nt)
    },
    TZwD: function (e, t, n) {
      'use strict'
      var o = n('EbOo'),
        i = n('u0B7'),
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
            d(u.id_str, { promotedContent: l }).catch(c(i.a)), s({ element: 'unblock' })
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
              }, c(o.a)),
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
      var o,
        i = n('KEM+'),
        r = n.n(i),
        a = n('k49u'),
        c = n('3XMw'),
        l = n.n(c).a.ee87e71c,
        s = ((o = {}), r()(o, a.a.SelfMuteError, { toast: { text: l } }), r()(o, 'showToast', !0), o)
    },
    j7tW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'b', function () {
          return m
        })
      var o = n('KEM+'),
        i = n.n(o),
        r = (n('2G9S'), n('oEOe')),
        a = n('PiaM'),
        c = 'rweb/'.concat('pinnedTweets'),
        l = n('x5Pi'),
        s = n('G6rE'),
        d = n('SRyb'),
        u = r.a(c, 'PIN'),
        h = r.a(c, 'UNPIN'),
        _ = function (e) {
          return function (t, n, o) {
            var c = o.api,
              h = o.featureSwitches
            return r.c(t, { params: { id: e }, request: c.Tweets.pin })(
              { actionTypes: u, context: 'ACTION_PIN_TWEET', meta: { tweetId: e } },
              function (o) {
                var r = s.e.selectLoggedInUser(n())
                if (void 0 !== r) {
                  var c = r.id_str,
                    u = r.pinned_tweet_ids_str && r.pinned_tweet_ids_str[0]
                  t(s.e.patchUser(c, { pinned_tweet_ids_str: [e] }))
                  var _ = Object(d.a)(h, c, 'default'),
                    p = u
                      ? [_.removeTweets(i()({}, u, !0)), _.injectEntry(a.k({ id: u, sortIndex: u }), { atTop: !1 })]
                      : []
                  return [].concat(p, [
                    _.removeTweets(i()({}, e, !0)),
                    _.injectEntry(
                      a.k({ id: e, content: { socialContext: { generalContext: l.a } }, sortIndex: 'NOT_USED' }),
                    ),
                  ])
                }
              },
            )
          }
        },
        p = function (e) {
          return function (t, n, o) {
            var c = o.api,
              l = o.featureSwitches
            return r.c(t, { params: { id: e }, request: c.Tweets.unpin })(
              { actionTypes: h, context: 'ACTION_UNPIN_TWEET', meta: { tweetId: e } },
              function (o) {
                var r = s.e.selectLoggedInUser(n())
                if (void 0 !== r) {
                  var c = r.id_str
                  return (
                    t(s.e.patchUser(c, { pinned_tweet_ids_str: [] })),
                    [
                      Object(d.a)(l, c, 'default').removeTweets(i()({}, e, !0)),
                      Object(d.a)(l, c, 'default').injectEntry(a.k({ id: e, sortIndex: e }), { atTop: !1 }),
                    ]
                  )
                }
              },
            )
          }
        },
        m = function (e, t) {
          var n = s.e.selectLoggedInUser(e)
          return !(null == n || !n.pinned_tweet_ids_str) && n.pinned_tweet_ids_str[0] === t
        }
    },
    jQy5: function (e, t, n) {
      'use strict'
      var o = n('OrGc'),
        i = n('foB5'),
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
          p = e.user,
          m = function () {
            _(p.id_str, { promotedContent: u }).then(function () {
              t({ text: Object(c.d)(p.screen_name), behavioralEventEntityToken: n })
            }, l(a.a)),
              h({ element: 'unmute' })
          },
          v = Object(c.a)(
            p,
            function () {
              d(p.id_str, { promotedContent: u }).then(function () {
                s && s({ userId: p.id_str, feedbackKeys: ['UnfollowEntity'] }),
                  t({
                    action: { label: r.a, onAction: m, behavioralEventViewType: 'unmute_person' },
                    behavioralEventEntityToken: n,
                    text: Object(c.b)(p.screen_name),
                  })
              }, l(i.a)),
                h({ element: 'mute' })
            },
            m,
          ),
          w = v.Icon,
          f = v.behavioralEventContext,
          b = v.onClick
        return { behavioralEventContext: f, Icon: w, text: v.text, onClick: b, shortcutKey: o.e.mute }
      }
    },
    xZXe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ve
      })
      var o = n('97Jx'),
        i = n.n(o),
        r = n('ddV6'),
        a = n.n(r),
        c = n('RhWx'),
        l = n.n(c),
        s = n('VrFO'),
        d = n.n(s),
        u = n('Y9Ll'),
        h = n.n(u),
        _ = n('1Pcy'),
        p = n.n(_),
        m = n('5Yy7'),
        v = n.n(m),
        w = n('2VqO'),
        f = n.n(w),
        b = n('KEM+'),
        C = n.n(b),
        k = n('yiKp'),
        y = n.n(k),
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
        T = n.n(g),
        I = n('ZyXd'),
        A = n('TZwD'),
        E = (n('ho0z'), n('RqPI')),
        S = n('1YZw'),
        x = n('Ig1G'),
        P = n('6rlp'),
        O = n('0pUJ'),
        F = n('Fmkq'),
        D = n('j7tW'),
        U = n('Zejx'),
        M = n('XOJV'),
        L = n('D5n3'),
        R = n('G6rE'),
        N = n('jL08'),
        B = n('eSoz'),
        H = n('rxPX'),
        j = n('0KEI'),
        K = n('EGrD'),
        V = n('x5Pi'),
        q = n('P1r1'),
        W = function (e, t) {
          var n = t.tweetId
          return Object(D.b)(e, n)
        },
        G = function (e, t) {
          return t.tweetId
        },
        z = function (e, t) {
          var n = t.urtAdvertiser,
            o = t.urtPromotedContent
          if (e && o) {
            var i = e.promoted_content
            return y()(
              y()({}, e),
              {},
              {
                promoted_content: y()(
                  {
                    adMetadataContainer: o.adMetadataContainer,
                    disclosure_type: o.disclosureType,
                    experiment_values: o.experimentValues,
                    impression_id: o.impressionId,
                    advertiser: n ? { id_str: n.id_str } : void 0,
                    advertiser_name: (null == n ? void 0 : n.name) || void 0,
                    click_tracking_info: o.clickTrackingInfo,
                  },
                  i,
                ),
              },
            )
          }
          return e
        },
        J = function (e, t) {
          return t.socialContext
        },
        Z = function (e, t) {
          var n = t.socialContext,
            o = n && n.topicContext
          return o ? U.a.select(e, o.topicId) : void 0
        },
        Q = function (e, t) {
          var n = t.tweetId,
            o = n && M.a.select(e, n)
          return o ? Object(B.g)(e, o) : void 0
        },
        X = function (e, t) {
          var n = M.a.createHydratedTweetSelector(G)(e, t),
            o = null == n ? void 0 : n.quoted_status
          return o ? Object(B.g)(e, o) : void 0
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
              adFreeArticleDomains: K.c,
              articleDomains: N.b,
              community: Q,
              contextTweet: M.a.createHydratedTweetSelector(ee),
              displaySensitiveMedia: q.k,
              explicitSocialContext: J,
              isNsfwUser: q.t,
              isPinned: W,
              loggedInUser: R.e.selectLoggedInUser,
              quoteTweetCommunity: X,
              topic: Z,
              tweet: M.a.createHydratedTweetSelector(G),
              urtAdvertiser: $,
              urtPromotedContent: Y,
              userCountry: E.z,
              userLanguage: E.p,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              o,
              i = e.adFreeArticleDomains,
              r = e.articleDomains,
              a = e.community,
              c = e.contextTweet,
              l = e.displaySensitiveMedia,
              s = e.explicitSocialContext,
              d = e.isNsfwUser,
              u = e.isPinned,
              h = e.loggedInUser,
              _ = e.quoteTweetCommunity,
              p = e.topic,
              m = e.tweet,
              v = e.urtAdvertiser,
              w = e.urtPromotedContent,
              f = e.userCountry,
              b = e.userLanguage,
              C = m && Object(V.f)(m, null == h ? void 0 : h.id_str),
              k =
                null == m ||
                null === (t = m.card) ||
                void 0 === t ||
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (o = n.domain) ||
                void 0 === o
                  ? void 0
                  : o.string_value,
              y = Object(N.a)(r, k),
              g = null == m ? void 0 : m.quoted_status,
              T = g ? Object(V.f)(g, null == h ? void 0 : h.id_str, _) : void 0,
              I = T && Object(V.e)(T),
              A = Object(x.c)(null == a ? void 0 : a.role)
            return {
              adFreeArticleDomains: i,
              contextTweet: c,
              displaySensitiveMedia: l,
              isCardArticle: y,
              isNsfwUser: d,
              isPinned: u,
              loggedInUser: h,
              promotedContentAdvertiser: v || void 0,
              quoteTweetSocialContextProps: I,
              socialContext: s || C,
              topic: p,
              tweet: z(m, { urtPromotedContent: w, urtAdvertiser: v }),
              userCountry: f,
              userLanguage: b,
              withCommunityModerationAuthority: A,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: S.b,
              block: R.e.block,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CONTAINER_CONTEXT',
              ),
              log: P.a,
              fetchAdFreeToken: K.a,
              fetchCommunityIfNeeded: B.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: U.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: K.b,
              mute: O.a,
              onUnretweet: L.a,
              richScribeAction: F.richScribeAction,
              setArticlesVisited: N.e,
              undoTopicNotInterested: U.a.undoNotInterested,
              unblock: R.e.unblock,
              unmute: R.e.unmute,
            }
          })
          .withAnalytics(),
        ne = n('6bZg'),
        oe = n('LSr9'),
        ie = n('3XMw'),
        re = n.n(ie),
        ae = n('iFPY'),
        ce = n('hACr'),
        le = n('jQy5'),
        se = n('3IPs'),
        de = n('Rp9C'),
        ue = n('uArA'),
        he = n('X04g'),
        _e = n('xM7j'),
        pe = n('BLtI'),
        me = n('3zeG'),
        ve = n('IO7v'),
        we = n('Irs7'),
        fe = n('MWbm'),
        be = n('v6aA'),
        Ce = n('E0cF'),
        ke = n('OIC0'),
        ye = n('+pKb'),
        ge = n('/Ikv'),
        Te = n('Z6aJ'),
        Ie = n('lHOd'),
        Ae = n('7JQg'),
        Ee = n('cFuS'),
        Se = n('24HD'),
        xe = n('4hQ9'),
        Pe = n('fz3c'),
        Oe = n('gZV8'),
        Fe = (function (e) {
          v()(n, e)
          var t = f()(n)
          function n() {
            var e
            d()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              C()(p()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  o = n.id,
                  i = n.onFullyVisible,
                  r = n.onVisible
                e._lastVisibleId !== o && t.verticalOverlap() >= 1 && ((e._lastVisibleId = o), r(t))
                var a = t.visibleFraction() >= Oe.c,
                  c = t.item.height > t.viewport.height,
                  l = t.verticalOverlap() === t.viewport.height || (c && t.visibleFraction() >= Oe.d)
                e._lastFullyVisibleId !== o && (a || l) && ((e._lastFullyVisibleId = o), i && i(t))
              }),
              C()(p()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout,
                  o = n.height,
                  i = n.width,
                  r = { width: i, height: o }
                if (e._prevLayout && (e._prevLayout.width !== i || e._prevLayout.height !== o)) {
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
                  return T.a.createElement(
                    Oe.e,
                    { key: n, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange },
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(T.a.PureComponent),
        De = n('fs1G'),
        Ue = n('oQhu'),
        Me = n('mN6z'),
        Le = n('Cqiq'),
        Re = re.a.f277e949,
        Ne = re.a.e4c6c309,
        Be = (function (e) {
          v()(n, e)
          var t = f()(n)
          function n(e, o) {
            var i, r
            d()(this, n),
              (r = t.call(this, e, o)),
              C()(p()(r), '_shouldLogPromotedImpression', je.bind(null, r.context.featureSwitches)),
              C()(p()(r), '_isProbablyRemovedByAdBlocker', He.bind(null, r.context.featureSwitches)),
              C()(
                p()(r),
                '_isArticleNudgeEnabled',
                r.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              C()(
                p()(r),
                '_isCompatibilityScribeEnabled',
                r.context.featureSwitches.isTrue('responsive_web_extension_compatibility_scribe'),
              ),
              C()(p()(r), '_isCommunitiesEnabled', r.context.featureSwitches.isTrue('c9s_enabled')),
              C()(
                p()(r),
                '_hasClaimsForAdFreeArticles',
                null === (i = r.context.userClaims) || void 0 === i
                  ? void 0
                  : i.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              C()(p()(r), '_renderBlockOrUnblockConfirmationSheet', function () {
                var e = r.props.tweet.user
                return Object(Se.j)({
                  confirmation: Object(Se.h)(e),
                  onClose: r._handleBlockOrUnblockConfirmClose,
                  handleConfirm: r._handleBlockOrUnblockUserConfirm,
                })
              }),
              C()(p()(r), '_handleShowReportedTweet', function () {
                r.setState({ displayReported: !0, enableKeyboardShortcuts: !1 })
              }),
              C()(p()(r), '_handleUnretweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  o = e.tweet
                n(Ce.a.getOriginalTweet(o).id_str, { promotedContent: o.promoted_content }).catch(t(ve.a))
              }),
              C()(p()(r), '_getShortcutKeyHandlers', function () {
                var e = r._getMuteOrUnmuteAction(),
                  t = e.onClick,
                  n = e.shortcutKey,
                  o = r._getBlockOrUnblockAction().shortcutKey,
                  i = r.context.loggedInUserId === r.props.tweet.user.id_str
                return y()(y()({}, n && C()({}, n, t)), o && !i && C()({}, o, r._handleBlockOrUnblockConfirmOpen))
              }),
              C()(p()(r), '_handleBlockOrUnblockConfirmOpen', function () {
                r.setState({ showBlockOrUnblockConfirmation: !0 })
              }),
              C()(p()(r), '_handleBlockOrUnblockConfirmClose', function () {
                r.setState({ showBlockOrUnblockConfirmation: !1 })
              }),
              C()(p()(r), '_handleBlockOrUnblockUserConfirm', function () {
                var e = r._getBlockOrUnblockAction().onClick
                r._handleBlockOrUnblockConfirmClose(), e && e()
              }),
              C()(p()(r), '_getBaseTweetProps', function () {
                var e = r.props,
                  t = e.contextualClientEventInfo,
                  n = e.conversationTreeMetadata,
                  o = e.feedbackItems,
                  i = e.focalTweetId,
                  a = e.forwardPivotInfo,
                  c = e.isNsfwUser,
                  l = e.isPinned,
                  s = e.onTweetDismiss,
                  d = e.ruxContext,
                  u = e.saveAsRecentSearch,
                  h = e.scribeData,
                  _ = e.shouldStoreTypeaheadItem,
                  p = e.socialContext,
                  m = e.topicFollowPrompt,
                  v = e.tweet,
                  w = e.userCountry,
                  f = e.userLanguage,
                  b = e.withActionsDisabled,
                  C = e.withCommunityModerationAuthority,
                  k = e.withCurationMenu,
                  y = e.withHideReply,
                  g = e.withMuteConversation,
                  T = e.withUnhideReply,
                  I = e.withViewHiddenReplies,
                  A = Ce.a.getOriginalTweet(v),
                  E = r._getPromotedContent(),
                  S = h.items && h.items[0] && h.items[0].suggestion_details,
                  x = r._isSelected(),
                  P = A && A.card && !v.is_quote_status ? A.card.url : void 0,
                  O = r.context.loggedInUserId,
                  F = A.user.id_str === O,
                  D = !A.in_reply_to_status_id_str && F && !A.community_id_str,
                  U = r._renderConversationControlsTooltip()
                return {
                  excludeCardUrl: P,
                  inlineCalloutInfo: r._getInlineCalloutInfo(),
                  isFocal: i === v.id_str,
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
                          o,
                          b,
                          c,
                          l,
                          x,
                          r._handleCaretClick,
                          s,
                          E,
                          A,
                          y,
                          C,
                          g,
                          T,
                          D,
                          I,
                          n,
                          null == t ? void 0 : t.entityToken,
                          U,
                          w,
                          f,
                        )
                      : void 0,
                  saveAsRecentSearch: u,
                  shouldStoreTypeaheadItem: _,
                  to: {
                    state: {
                      focal: A.id_str,
                      socialContext: p,
                      contextualClientEventInfo: t,
                      contextTweetId: v.id_str,
                      promotedContent: E,
                      suggestionDetails: S,
                      topicFollowPrompt: m,
                    },
                    pathname: A.permalink,
                    query: d ? { cxt: d } : void 0,
                  },
                }
              }),
              C()(p()(r), '_getReaderModeTweetProps', function () {
                var e,
                  t = r.props,
                  n = t.contextualClientEventInfo,
                  o = t.ruxContext,
                  i = t.scribeData,
                  a = t.socialContext,
                  c = t.topicFollowPrompt,
                  l = t.tweet,
                  s = t.tweetTextSize,
                  d = Ce.a.getOriginalTweet(l),
                  u = r._getPromotedContent(),
                  h = i.items && i.items[0] && i.items[0].suggestion_details
                return {
                  excludeCardUrl: null === (e = l.card) || void 0 === e ? void 0 : e.url,
                  onAnalyticsClick: De.a,
                  onAvatarClick: De.a,
                  onBlur: r._handleBlur,
                  onCardLinkClick: r._handleCardLinkClick,
                  onClick: l.isPreview ? r._handlePreviewClick : r._handleTweetClick,
                  onEntityClick: De.a,
                  onFocus: r._handleFocus,
                  onMediaClick: r._handleEmbeddedMediaClick,
                  onReplyContextClick: De.a,
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
                    query: o ? { cxt: o } : void 0,
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
              C()(p()(r), '_getInlineCalloutInfo', function () {
                var e = r.props,
                  t = e.displaySensitiveMedia,
                  n = e.isNsfwUser,
                  o = e.scribeNamespace,
                  i = e.tweet,
                  a = e.userCountry,
                  c = e.userLanguage,
                  l = r.context,
                  s = l.featureSwitches,
                  d = l.loggedInUserId
                if (
                  Object(xe.e)({
                    displaySensitiveMedia: t,
                    featureSwitches: s,
                    isNsfwUser: n,
                    loggedInUserId: d,
                    tweet: i,
                    userCountry: a,
                    userLanguage: c,
                  })
                )
                  return Object(xe.d)(i, o, s)
              }),
              C()(p()(r), '_getBlockOrUnblockAction', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.block,
                  o = e.contextualClientEventInfo,
                  i = e.createLocalApiErrorHandler,
                  a = e.tweet,
                  c = e.unblock,
                  l = a.user,
                  s = r._getPromotedContent(),
                  d = {
                    addToast: t,
                    behavioralEventEntityToken: null == o ? void 0 : o.entityToken,
                    createLocalApiErrorHandler: i,
                    scribeAction: function (e) {
                      var t = e.element
                      r._scribeAction({ element: t, action: 'click' })
                    },
                  }
                return Object(A.a)(y()(y()({}, d), {}, { block: n, unblock: c, user: l, promotedContent: s }))
              }),
              C()(p()(r), '_getMuteOrUnmuteAction', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.contextualClientEventInfo,
                  o = e.createLocalApiErrorHandler,
                  i = e.mute,
                  a = e.tweet,
                  c = e.unmute,
                  l = a.user,
                  s = {
                    addToast: t,
                    behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                    createLocalApiErrorHandler: o,
                    scribeAction: function (e) {
                      var t = e.element
                      r._scribeAction({ element: t, action: 'click' })
                    },
                  },
                  d = r._getPromotedContent()
                return Object(le.a)(y()(y()({}, s), {}, { mute: i, unmute: c, user: l, promotedContent: d }))
              }),
              C()(p()(r), '_renderConversationControlsTooltip', function () {
                var e = r.context.loggedInUserId,
                  t = r.props,
                  n = t.showMidConversationControlEducationText,
                  o = t.tweet,
                  i = Ce.a.getOriginalTweet(o)
                if (!i) return !1
                var a = !!i.community_id_str,
                  c = i.user.id_str === e,
                  l = i.reply_count > 0
                return !i.in_reply_to_status_id_str && c && l && !a && n
              }),
              C()(
                p()(r),
                '_getRenderCurationActionMenu',
                Object(Ue.a)(function (e, t, n, o, i, r, a, c, l, s, d, u, h, _, p, m, v, w, f, b, C) {
                  return function () {
                    return T.a.createElement(me.a, {
                      behavioralEventEntityToken: w,
                      feedbackItems: t,
                      forwardPivotDisplayType: e,
                      isDisabled: n,
                      isNsfwUser: o,
                      isPinned: i,
                      onMenuClick: a,
                      onTweetDismiss: c,
                      promotedContent: l,
                      tweet: s,
                      userCountry: b,
                      userLanguage: C,
                      withChangeConversationControls: p,
                      withChangeConversationControlsTooltip: f,
                      withCommunityModerationAuthority: u,
                      withHideReply: d,
                      withMuteConversation: h,
                      withUnhideReply: _,
                      withViewHiddenReplies: m,
                    })
                  }
                }),
              ),
              C()(
                p()(r),
                '_getDefaultScribeData',
                Object(Ue.a)(function (e, t, n, o, i, a) {
                  var c = (function (e) {
                    var t = e.clickTrackingEmbedDetails,
                      n = e.contextualScribeData,
                      o = e.isSelected,
                      i = e.overflow,
                      r = e.promotedContent,
                      a = e.scribeData,
                      c = e.tweet,
                      l = de.a.addTweetToItems(a ? a.items : [], c, r, o, i)
                    return y()(
                      y()(y()(y()({}, n || {}), a || {}), t && { click_tracking_embed_details: t }),
                      {},
                      { items: l },
                    )
                  })({
                    tweet: e,
                    promotedContent: t,
                    scribeData: n,
                    overflow: o,
                    isSelected: r._isSelected(),
                    contextualScribeData: i,
                    clickTrackingEmbedDetails: a,
                  })
                  return (
                    (r._cachedFinalScribeData && Object(Me.a)(c, r._cachedFinalScribeData)) ||
                      (r._cachedFinalScribeData = c),
                    r._cachedFinalScribeData
                  )
                }),
              ),
              C()(p()(r), '_scribeAction', function (e) {
                var t,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = arguments.length > 2 ? arguments[2] : void 0,
                  i = arguments.length > 3 ? arguments[3] : void 0,
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  c = r.props,
                  s = c.analytics,
                  d = c.history,
                  u = c.richScribeAction,
                  h = c.scribeData,
                  _ = c.scribeNamespace,
                  p = c.tweet,
                  m = null === (t = d.location.state) || void 0 === t ? void 0 : t.overflow,
                  v = r._getPromotedContent(),
                  w = h
                if (i) {
                  var f = de.a.getUserItem(p.user, v),
                    b = w.items ? [].concat(l()(w.items), [f]) : [f]
                  w = y()(y()({}, w), {}, { items: b })
                }
                if (a) {
                  var C = { article_details: { is_ad_free: a } },
                    k = w.items ? [].concat(l()(w.items), [C]) : [C]
                  w = y()(y()({}, w), {}, { items: k })
                }
                var g = r._getDefaultScribeData(Ce.a.getOriginalTweet(p), v, w, m, s.contextualScribeData, o)
                u(y()(y()({}, _), e), y()(y()({}, g), n))
              }),
              C()(p()(r), '_handlePoliticalSponsorWebsiteClick', function () {
                r._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
              }),
              C()(p()(r), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
                return function () {
                  r._scribeAction({ component: e, element: 'learn_more', action: 'click' })
                }
              }),
              C()(p()(r), '_handlePromotedIndicatorClick', function () {
                r._handleAsyncPromotedEvent(Ee.b.FOOTER_PROFILE)
              }),
              C()(p()(r), '_handleFocus', function () {
                r.setState({ enableKeyboardShortcuts: !0 })
              }),
              C()(p()(r), '_handleBlur', function () {
                r.setState({ enableKeyboardShortcuts: !1 })
              }),
              C()(p()(r), '_getPromotedContent', function () {
                var e = r.props,
                  t = e.displayPromotedContent,
                  n = e.tweet
                return t ? n.promoted_content : void 0
              }),
              C()(p()(r), '_handleImpression', function (e) {
                r._shouldLogPromotedImpression(e) && r._handleAsyncPromotedEvent(Ee.b.IMPRESSION)
              }),
              C()(p()(r), '_handleFullyVisible', function (e) {
                r._shouldLogPromotedImpression(e) && r._handleAsyncPromotedEvent(Ee.b.DWELL)
              }),
              C()(p()(r), '_handleResize', function (e, t) {
                !r._isProbablyRemovedByAdBlocker(e) &&
                  r._isProbablyRemovedByAdBlocker(t) &&
                  (I.a.recordAdBlockerPresence(),
                  r._isCompatibilityScribeEnabled && r._scribeAction({ action: 'blocked_ad' }))
              }),
              C()(p()(r), '_handleInlineReplyClick', function (e) {
                var t = r.context.loggedInUserId,
                  n = r.props,
                  o = n.history,
                  i = n.tweet,
                  a = r._getPromotedContent()
                e.preventDefault(),
                  r._scribeAction({ element: 'inline_reply', action: 'reply' }),
                  o.push({
                    state: {
                      inReplyToStatusId: i.id_str,
                      isSelfThreadReply: !!t && Object(xe.c)({ tweet: i, loggedInUserId: t }),
                      promotedContent: a,
                    },
                    pathname: '/compose/tweet',
                  })
              }),
              C()(p()(r), '_handleLikeSuccess', function () {
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
                  } catch (o) {}
                }
              }),
              C()(p()(r), '_handleReplyContextClick', function (e, t) {
                return r._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
              }),
              C()(p()(r), '_handleAsyncPromotedEvent', function (e, t) {
                var n = r.props,
                  o = n.createLocalApiErrorHandler,
                  i = n.log,
                  a = n.tweet,
                  c = r._getPromotedContent()
                if (c) {
                  var l = c.disclosure_type,
                    s = c.impression_id
                  i({
                    disclosureType: l,
                    itemId: a.id_str,
                    itemType: Ee.c.TWEET,
                    params: y()({ event: e, impression_id: s }, t),
                  }).catch(o())
                }
              }),
              C()(p()(r), '_handleModeratedIconClick', function () {
                return r._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
              }),
              C()(p()(r), '_handleModeratedIconShown', function () {
                return r._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
              }),
              C()(p()(r), '_handleBirdwatchNotesIconClick', function () {
                return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
              }),
              C()(p()(r), '_handleBirdwatchNotesIconShown', function () {
                return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
              }),
              C()(p()(r), '_handleAnalyticsClick', function () {
                r._scribeAction({ element: 'analytics', action: 'click' })
              }),
              C()(p()(r), '_handlePromoteButtonClick', function () {
                r._scribeAction({ element: 'promote', action: 'click' })
              }),
              C()(p()(r), '_handlePromoteAgainButtonClick', function () {
                r._scribeAction({ element: 'promote_again', action: 'click' })
              }),
              C()(p()(r), '_handleAvatarClick', function () {
                var e = r.props.tweet
                r._handleSaveAsRecentSearchUser(),
                  r._scribeAction(
                    { element: 'avatar', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  r._handleAsyncPromotedEvent(Ee.b.PROFILE_IMAGE_CLICK)
              }),
              C()(p()(r), '_handleCaretClick', function () {
                return r._scribeAction({ element: 'caret', action: 'click' })
              }),
              C()(
                p()(r),
                '_handleTweetClick',
                Object(ue.a)(function (e) {
                  if (!e.defaultPrevented) {
                    if ((e.stopPropagation(), window.getSelection().toString().length)) return
                    r._scribeAction({ element: 'tweet', action: 'click' }),
                      r._handleAsyncPromotedEvent(Ee.b.VIEW_DETAILS)
                  }
                }),
              ),
              C()(p()(r), '_handlePreviewClick', function (e) {
                e.preventDefault()
              }),
              C()(p()(r), '_handleEmbeddedMediaPreviewClick', function (e) {
                null == e || e.preventDefault()
              }),
              C()(p()(r), '_handleEmbeddedMediaClick', function () {
                r._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                  r._handleAsyncPromotedEvent(Ee.b.EMBEDDED_MEDIA)
              }),
              C()(p()(r), '_handleQuoteTweetClick', function () {
                r._scribeAction({ element: 'tweet', action: 'click' }), r._handleAsyncPromotedEvent(Ee.b.VIEW_DETAILS)
              }),
              C()(p()(r), '_handleEntityClick', function (e, t, n) {
                var o = r.props,
                  i = o.adFreeArticleDomains,
                  c = o.createLocalApiErrorHandler,
                  l = o.fetchAdFreeToken,
                  s = o.tweet,
                  d = Ee.a[t],
                  u = ne.a[t],
                  h = r._getPromotedContent(),
                  _ = de.a.getClickTrackingEmbedDetails(h, n)
                if (d) {
                  var p =
                    d === Ee.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                      ? { url: e.currentTarget.href }
                      : void 0
                  r._handleAsyncPromotedEvent(d, p)
                }
                if (t === ke.a.MEDIA) return r._handleTweetClick(e)
                t === ke.a.URL && _ && r._scribeAction({ action: ye.b.CLICK_ID_EMBED }, {}, _)
                var m = !1
                if (r._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                  var v = new URL(n.expandedUrl).hostname,
                    w = new oe.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: n.embeddedUrl,
                      linkDomain: v,
                      adFreeArticleDomains: i,
                      tweetAuthorUserId: s.user.id_str,
                    }),
                    f = a()(w, 2),
                    b = f[0],
                    C = f[1]
                  b && (C(e), (m = !0))
                }
                if (t === ke.a.MENTION) {
                  var k = null != n && n.text ? [{ item_type: he.a.ItemType.USER, name: n.text, id: n.id_str }] : void 0
                  return r._scribeAction({ action: u }, { targets: k }, void 0, void 0, m)
                }
                if (t === ke.a.HASHTAG) {
                  var y = null != n && n.text ? [{ name: n.text }] : void 0
                  return r._scribeAction({ action: u }, { targets: y }, void 0, void 0, m)
                }
                if (t === ke.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                  return r._scribeAction(
                    { element: 'interactive_text', action: u },
                    { interactive_text_details: { id: n.id } },
                    void 0,
                    void 0,
                    m,
                  )
                u && r._scribeAction({ action: u }, void 0, void 0, void 0, m)
              }),
              C()(p()(r), '_handleScreenNameClick', function () {
                var e = r.props.tweet
                r._handleSaveAsRecentSearchUser(),
                  r._scribeAction(
                    { element: 'user', action: 'profile_click' },
                    { profile_id: ''.concat(e.user.id) },
                    void 0,
                    !0,
                  ),
                  r._handleAsyncPromotedEvent(Ee.b.SCREEN_NAME_CLICK)
              }),
              C()(p()(r), '_handleSelfThreadClick', function () {
                return r._scribeAction({ element: 'self_thread', action: 'click' })
              }),
              C()(p()(r), '_handleSelfThreadImpression', function () {
                return r._scribeAction({ element: 'self_thread', action: 'impression' })
              }),
              C()(p()(r), '_handleTopicFetch', function () {
                var e,
                  t = r.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.fetchTopicIfNeeded,
                  i = t.socialContext,
                  a = i && (null === (e = i.topicContext) || void 0 === e ? void 0 : e.topicId)
                a && o(a).catch(n())
              }),
              C()(p()(r), '_handleCommunityFetch', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCommunityIfNeeded,
                  o = e.tweet
                if (r._isCommunitiesEnabled && o) {
                  var i,
                    a = o.community_id_str,
                    c = null === (i = o.quoted_status) || void 0 === i ? void 0 : i.community_id_str
                  a && n(a).catch(t()), c && n(c).catch(t())
                }
              }),
              C()(p()(r), '_handleUndoTopicNotInterested', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.topic,
                  o = e.undoTopicNotInterested
                r._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && o(n.id).catch(t())
              }),
              C()(p()(r), '_handleCardLinkClick', function (e) {
                var t,
                  n = r.props,
                  o = n.adFreeArticleDomains,
                  i = n.analytics,
                  c = n.createLocalApiErrorHandler,
                  l = n.fetchAdFreeToken,
                  s = n.isCardArticle,
                  d = n.setArticlesVisited,
                  u = n.tweet
                if (s && r._isArticleNudgeEnabled) {
                  var h,
                    _,
                    p = null == u || null === (h = u.card) || void 0 === h ? void 0 : h.url
                  if (p)
                    d(p),
                      i.scribe({
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
                var m = null == u || null === (t = u.card) || void 0 === t ? void 0 : t.binding_values
                if (r._hasClaimsForAdFreeArticles && m) {
                  var v = new oe.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: ge.a.getBindingValue(m, 'card_url'),
                      linkDomain: ge.a.getBindingValue(m, 'domain'),
                      adFreeArticleDomains: o,
                    }),
                    w = a()(v, 2),
                    f = w[0],
                    b = w[1]
                  f && b(e)
                }
              }),
              C()(p()(r), '_handleSaveAsRecentSearchUser', function () {
                var e = r.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  o = e.tweet.user
                t && n && n(he.a.ItemType.USER) && t({ user: { id: o.id_str, type: se.a.User } })
              }),
              C()(p()(r), '_isSelected', function () {
                var e = r.props,
                  t = e.conversationTreeMetadata,
                  n = e.tweet,
                  o = (t || {}).selectedTweet
                return o && n.id_str === o.selectedTweetId
              }),
              C()(p()(r), '_handleMediaHashtagHighlightClick', function () {
                r._handleAsyncPromotedEvent(Ee.b.HASHTAG_CLICK)
              }),
              (r.state = { displayReported: !1, enableKeyboardShortcuts: !1, showBlockOrUnblockConfirmation: !1 })
            var c = r._getPromotedContent()
            return (
              (r._shouldHidePromotedTweet =
                Te.a.isPromoted(c) && I.a.shouldHidePromotedTweets(r.context.featureSwitches)),
              r
            )
          }
          return (
            h()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(Me.a)(this.props, e) || !Object(Me.a)(this.state, t)
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
                    o = t.conversationTreeMetadata,
                    i = t.showWithheldBannerOnMyTweets,
                    r = t.tweet
                  if (!this._shouldRender())
                    return o
                      ? T.a.createElement(_e.a, { conversationPosition: n, conversationTreeMetadata: o }, Ne)
                      : null
                  var a = r.user.id_str === e,
                    c = Object(Le.b)(Ce.a.getOriginalTweet(r).withheld_scope),
                    l = a && !r.retweeted_status,
                    s = l && 'user' === Ce.a.getOriginalTweet(r).withheld_scope && !i,
                    d = Object(Pe.h)(r) && !this.state.displayReported
                  return T.a.createElement(
                    T.a.Fragment,
                    null,
                    c
                      ? T.a.createElement(
                          fe.a,
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
                    o = e.history,
                    i = e.tweet,
                    r = e.tweetId
                  if (
                    i &&
                    'focal_module' === (null == t ? void 0 : t.component) &&
                    o.location.pathname.indexOf('/intent/') > -1 &&
                    o.location.query.tweet_id === r
                  )
                    return T.a.createElement(ae.a, {
                      forwardPivotInfo: n,
                      history: o,
                      location: o.location,
                      tweetId: i.id_str,
                    })
                },
              },
              {
                key: '_renderWithheldTweet',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.conversationTreeMetadata,
                    o = e.tweet,
                    i = o.user.id_str,
                    r = Ce.a.getOriginalTweet(o),
                    a = this.context.loggedInUserId,
                    c = !!a && a === i && r.retweeted,
                    l = r.withheld_text || r.text,
                    s = r.withheld_entities || r.entities,
                    d = o.user.id_str === a
                  return T.a.createElement(Le.a, {
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
                    o = e.tweet,
                    i = Ce.a.getOriginalTweet(o),
                    r = Object(Pe.c)(i.reportingVisibility)
                  return T.a.createElement(
                    _e.a,
                    {
                      actionText: Re,
                      conversationPosition: t,
                      conversationTreeMetadata: n,
                      lang: i.lang,
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
                    o = t.analytics,
                    i = t.bookmarkFolderId,
                    r = t.contextTweet,
                    a = t.conversationPosition,
                    c = t.conversationTreeMetadata,
                    l = t.displayBlocked,
                    s = t.forwardPivotInfo,
                    d = t.hasModeratedReplies,
                    u = t.hideConversationControlsEducationText,
                    h = t.hideExclusivityInfoEducationTextInReplies,
                    _ = t.hideTrustedFriendsEducationTextInReplies,
                    p = t.history,
                    m = t.hitHighlights,
                    v = t.injectedFeedbackItem,
                    w = t.innerForwardPivotInfo,
                    f = t.isReaderMode,
                    b = t.isUnread,
                    C = t.linkify,
                    k = t.loggedInUser,
                    g = t.promotedContentAdvertiser,
                    I = t.quoteTweetSocialContextProps,
                    A = t.quotedTweetTombstoneInfo,
                    E = t.replyBadge,
                    S = t.replyContext,
                    x = t.scribeData,
                    P = t.scribeNamespace,
                    O = t.shouldSelfThreadIncludeAvatar,
                    F = t.socialContext,
                    D = t.topic,
                    U = t.topicFollowPrompt,
                    M = t.tweet,
                    L = t.withActions,
                    R = t.withActionsDisabled,
                    N = t.withBirdwatchPivots,
                    B = t.withCardLinks,
                    H = t.withInlineMedia,
                    j = t.withQuotedTweetLinks,
                    K = t.withRemoveFromBookmarks,
                    V = t.withSelfThread,
                    q = t.withSocialContext,
                    W = t.withUserPresence,
                    G = this.state.enableKeyboardShortcuts,
                    z = Ce.a.getOriginalTweet(M),
                    J = this._getPromotedContent(),
                    Z = Object(Me.a)(this._cachedScribeNamespace, P)
                      ? this._cachedScribeNamespace
                      : (this._cachedScribeNamespace = P),
                    Q = null === (e = p.location.state) || void 0 === e ? void 0 : e.overflow,
                    X = {
                      allowDownvote: n,
                      bookmarkFolderId: i,
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
                      hitHighlights: m,
                      injectedFeedbackItem: v,
                      innerForwardPivotInfo: w,
                      linkify: C,
                      loggedInUser: k,
                      promotedContentAdvertiser: g,
                      quotedTweetTombstoneInfo: A,
                      quoteTweetSocialContextProps: I,
                      replyBadge: E,
                      replyContext: S,
                      shouldSelfThreadIncludeAvatar: O,
                      socialContext: F,
                      topic: D,
                      topicFollowPrompt: U,
                      tweet: M,
                      withActions: L,
                      withActionsDisabled: R,
                      withBirdwatchPivots: N,
                      withCardLinks: B,
                      withInlineMedia: H,
                      withQuotedTweetLinks: j,
                      withRemoveFromBookmarks: K,
                      withSelfThread: V,
                      withSocialContext: q,
                      withUnreadStyles: b,
                      withUserPresence: W,
                    },
                    Y = y()(y()({}, X), f ? this._getReaderModeTweetProps() : this._getBaseTweetProps()),
                    $ = T.a.createElement(
                      Ae.c,
                      { data: this._getDefaultScribeData(z, J, x, Q, o.contextualScribeData, void 0), namespace: Z },
                      T.a.createElement(
                        ce.a,
                        { enabled: !!G, handlers: this._getShortcutKeyHandlers() },
                        T.a.createElement(pe.b, Y),
                      ),
                    )
                  return J
                    ? T.a.createElement(
                        Fe,
                        {
                          id: M.id_str,
                          onFullyVisible: this._handleFullyVisible,
                          onResize: this._handleResize,
                          onVisible: this._handleImpression,
                        },
                        $,
                      )
                    : $
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
                    Object(Pe.f)(e)
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
                    o = n.displayBlocked,
                    i = n.focalTweetId,
                    r = n.tweet,
                    a = Ce.a.getOriginalTweet(r),
                    c =
                      !(null == r || null === (e = r.user) || void 0 === e || !e.blocking) ||
                      !(null == a || null === (t = a.user) || void 0 === t || !t.blocking)
                  return i !== r.id_str && !o && c
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      C()(Be, 'defaultProps', {
        displayBlocked: !1,
        shouldSelfThreadIncludeAvatar: !1,
        showWithheldBannerOnMyTweets: !0,
        withCardLinks: !1,
        withCurationMenu: !0,
        withRemoveFromBookmarks: !1,
        withMuteConversation: !1,
      }),
        C()(Be, 'contextType', be.a)
      var He = function (e, t) {
          return t.height <= e.getNumberValue('responsive_web_extension_compatibility_size_threshold', 50)
        },
        je = function (e, t) {
          return !(e.isTrue('responsive_web_extension_compatibility_impression_guard') && He(e, t.item))
        },
        Ke = function (e) {
          var t,
            n,
            o,
            r = T.a.useContext(Ie.a)
          return (
            (t = e.tweetId),
            (n = e.tweet),
            (o = Object(we.b)()),
            T.a.useEffect(
              function () {
                n || o.scribe({ action: 'hydration_failed', data: { tweet_id: t } })
              },
              [o, n, t],
            ),
            e.tweet ? T.a.createElement(Be, i()({}, e, { history: r, tweet: e.tweet })) : null
          )
        }
      Ke.defaultProps = Be.defaultProps
      var Ve = te(Ke)
      t.b = Object(Ae.a)({ component: 'tweet' })(Ve)
    },
  },
])
//# sourceMappingURL=WIPED
