;(window.webpackJsonp = window.webpackJsonp || []).push([
  [362],
  {
    '+Sp1': function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        i = n.n(o).a.createContext({ draggingTweetId: void 0 })
      t.a = i
    },
    '0ULw': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ERkP'),
        a = n.n(r),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
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
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      n('yH/f')
      var o = n('ERkP'),
        i = n.n(o),
        r = n('t62R'),
        a = n('EHV7'),
        c = n('rHpw'),
        l = c.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        s = n('7Mjr'),
        d = n('I4+6'),
        u = n('cm6r'),
        h = n('MWbm'),
        p = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var m = c.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          o = e.nativeID,
          v = e.rightControl,
          _ = e.style,
          f = e.subtext,
          w = e.testID,
          b = e.text,
          C = (function (e) {
            switch (e) {
              case p.TopicFilled:
                return i.a.createElement(a.a, { style: l.icon })
              default:
                return null
            }
          })(t),
          y = f ? null : m.withSubtext,
          g = d.a.generate({
            backgroundColor: c.a.theme.colors.gray0,
            color: c.a.theme.colors.cellBackground,
            customFocusBackgroundColor: c.a.theme.colors.gray0,
            customHoverBackgroundColor: c.a.theme.colors.gray0,
            customPressedBackgroundColor: c.a.theme.colors.gray0,
          })
        return i.a.createElement(
          u.a,
          {
            interactiveStyles: n ? g : null,
            link: null == n ? void 0 : n.url,
            nativeID: o,
            style: [m.root, _],
            testID: w,
          },
          i.a.createElement(
            h.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: m.mainContent },
            i.a.createElement(h.a, { style: m.icon }, C),
            i.a.createElement(
              r.b,
              { numberOfLines: 3, size: 'headline1', style: y, weight: 'heavy', withHashflags: !0 },
              b,
            ),
            i.a.createElement(
              h.a,
              { style: m.rightControlGroup },
              n ? i.a.createElement(h.a, { style: y }, i.a.createElement(s.a, { style: m.iconArrow })) : null,
              v ? i.a.createElement(h.a, null, v) : null,
            ),
          ),
          f
            ? i.a.createElement(
                r.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: m.subtext, withHashflags: !0 },
                f,
              )
            : null,
        )
      }
    },
    '9Jxp': function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        i = n.n(o),
        r = n('ERkP'),
        a = n.n(r),
        c = n('CXUS'),
        l = n('rHpw'),
        s = n('MWbm'),
        d = l.a.create(function () {
          return { hidden: { opacity: 0 } }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.draggableId,
          o = e.fromVirtualList,
          r = e.index,
          l = e.isBeingDragged,
          u = e.isDragDisabled
        return o && l
          ? a.a.createElement(s.a, { style: d.hidden }, t)
          : a.a.createElement(c.b, { draggableId: n, index: r, isDragDisabled: u }, function (e) {
              return a.a.createElement('div', i()({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps), t)
            })
      }
    },
    A6fF: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('VPAj'),
        c = n('ERkP'),
        l = n.n(c),
        s = n('XOJV'),
        d = n('rxPX'),
        u = n('Fg8X'),
        h = function (e, t) {
          return u.a.select(e, t.momentId)
        },
        p = function (e, t) {
          return s.a.selectHydrated(e, t.entry.content.id)
        },
        m = Object(d.a)().propsFromState(function () {
          return { moment: h, tweet: p }
        }),
        v = n('+Sp1'),
        _ = n('UcEn'),
        f = n('9Jxp'),
        w = n('CUXw'),
        b = n('TXsO'),
        C = n('E0cF'),
        y = n('cm6r'),
        g = m(function (e) {
          var t,
            n,
            o,
            i = e.entry,
            r = i.content.id,
            a = i.index,
            c = e.moment,
            s = e.onClick,
            d = e.tweet,
            u = l.a.useContext(v.a),
            h = l.a.useContext(_.a),
            p = l.a.useRef(),
            m = d && C.a.getOriginalTweet(d),
            g = (null == m ? void 0 : m.id_str) || r
          null != d && null !== (t = d.user) && void 0 !== t && t.protected
            ? (o = b.l)
            : d && C.a.isQuotedTweetUnavailable(d) && (o = b.k)
          var k = ((null == c || null === (n = c.pages) || void 0 === n ? void 0 : n.length) || 0) >= b.e,
            I = u.draggingTweetId === g,
            T = !!o || k,
            E = h.selectedTweets.has(g),
            A = null !== u.draggingTweetId && E
          return null != a
            ? l.a.createElement(
                y.a,
                {
                  onClick: T
                    ? void 0
                    : function () {
                        var e
                        null === (e = p.current) || void 0 === e || e._handleOnClick()
                      },
                },
                l.a.createElement(
                  f.a,
                  { draggableId: g, fromVirtualList: !0, index: a, isBeingDragged: I, isDragDisabled: T },
                  l.a.createElement(w.a, {
                    disabledMessage: o,
                    isPartOfDraggedSelection: A,
                    isSelected: E,
                    onClick: s,
                    ref: function (e) {
                      p.current = e
                    },
                    tweetId: r,
                  }),
                ),
              )
            : null
        })
      t.default = function (e) {
        return r
          .b({
            component: g,
            isClickable: Object(a.a)(!0),
            isFocusable: Object(a.a)(!0),
            shouldDisplayBorder: Object(a.a)(!0),
          })
          .getHandler(function () {
            return i()({}, e)
          })
      }
    },
    CUXw: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        i = n.n(o),
        r = n('yiKp'),
        a = n.n(r),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        h = n.n(u),
        p = n('5Yy7'),
        m = n.n(p),
        v = n('2VqO'),
        _ = n.n(v),
        f = n('KEM+'),
        w = n.n(f),
        b = (n('2G9S'), n('ERkP')),
        C = n.n(b),
        y = n('XOJV'),
        g = n('E0cF'),
        k = n('rxPX'),
        I = n('0KEI'),
        T = function (e, t) {
          return t.tweetId
        },
        E = Object(k.a)()
          .propsFromState(function () {
            return { tweet: y.a.createHydratedTweetSelector(T) }
          })
          .adjustStateProps(function (e) {
            var t = e.tweet
            return { originalTweet: (t && g.a.getOriginalTweet(t)) || t, tweet: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_SELECT_CONTEXT',
              ),
            }
          }),
        A = n('3XMw'),
        x = n.n(A),
        S = n('x5Pi'),
        P = n('fs1G'),
        O = n('kXdP'),
        D = n('BLtI'),
        F = n('MWbm'),
        M = n('htQn'),
        R = n('Znyr'),
        U = n('kY28'),
        L = n('rHpw'),
        j = n('v6aA'),
        B = n('6Rrp'),
        N = n('0ULw'),
        H = n('pu5c'),
        V = x.a.h6beb5fa,
        K = function (e) {
          return e && e.preventDefault()
        },
        z = (function (e) {
          m()(n, e)
          var t = _()(n)
          function n() {
            var e
            l()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              w()(h()(e), '_renderDisabledTweet', function (t) {
                return C.a.createElement(
                  F.a,
                  { style: W.root },
                  e._renderContent(),
                  C.a.createElement(F.a, { style: W.disabledTweetMask }),
                  C.a.createElement(
                    F.a,
                    { style: [W.disabledIconWrapper, W.iconMargins] },
                    C.a.createElement(O.a, { hoverText: t }, q, C.a.createElement(F.a, { style: W.disabledTweetMask })),
                  ),
                )
              }),
              w()(h()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.replyContext,
                  o = t.tweet,
                  i = t.withActions
                if (o) {
                  var r,
                    a = Object(S.f)(o, e.context.loggedInUserId)
                  return C.a.createElement(
                    F.a,
                    { style: W.tweet },
                    C.a.createElement(D.b, {
                      excludeCardUrl: null === (r = o.card) || void 0 === r ? void 0 : r.url,
                      linkableQuotedTweet: !0,
                      onAnalyticsClick: P.a,
                      onAvatarClick: P.a,
                      onEntityClick: P.a,
                      onMediaClick: K,
                      onReplyContextClick: P.a,
                      preventVideoPlayback: !0,
                      replyContext: n,
                      socialContext: a,
                      tweet: o,
                      withActions: i,
                      withActionsDisabled: !0,
                      withSocialContext: !0,
                    }),
                  )
                }
                return null
              }),
              w()(h()(e), '_renderSelectIcon', function (e) {
                return e
                  ? C.a.createElement(B.a, { style: [W.icon, W.iconMargins, W.iconCheckmark] })
                  : C.a.createElement(N.a, { style: [W.icon, W.iconMargins] })
              }),
              w()(h()(e), '_handleOnClick', function () {
                var t = e.props,
                  n = t.onClick,
                  o = t.originalTweet,
                  i = t.tweetId
                n && n((null == o ? void 0 : o.id_str) || i)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabledMessage,
                    n = e.isPartOfDraggedSelection,
                    o = e.isSelected,
                    i = e.showDragCount,
                    r = e.tweet,
                    a = e.withSelectIcon
                  return t
                    ? this._renderDisabledTweet(t)
                    : r
                    ? C.a.createElement(
                        M.a,
                        { onPress: this._handleOnClick, style: W.root },
                        this._renderDragCount(i),
                        this._renderContent(),
                        a ? this._renderSelectIcon(o) : null,
                        n && C.a.createElement(F.a, { style: W.disabledTweetMask }),
                      )
                    : null
                },
              },
              {
                key: '_renderDragCount',
                value: function (e) {
                  return e < 2
                    ? null
                    : C.a.createElement(
                        F.a,
                        { style: W.countBadgeContainer },
                        C.a.createElement(R.a, {
                          count: e,
                          standalone: !0,
                          style: W.countBadge,
                          truncatedCountFormatter: V,
                          unreadCountLabel: function () {
                            return ''
                          },
                          withBorder: !1,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      w()(z, 'contextType', j.a),
        w()(z, 'defaultProps', {
          replyContext: U.a.ReplyContextTypes.Isolated,
          withActions: !0,
          withSelectIcon: !0,
          showDragCount: 0,
          isPartOfDraggedSelection: !1,
          isSelected: !1,
        })
      var W = L.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexDirection: 'row' },
            tweet: { flex: 1 },
            disabledTweetMask: a()(
              a()({}, L.a.absoluteFillObject),
              {},
              { backgroundColor: e.colors.navigationBackground, opacity: '50%' },
            ),
            disabledIconWrapper: { height: '100%' },
            icon: { color: e.colors.gray700 },
            iconMargins: { marginTop: e.spaces.space12, marginRight: e.spaces.space12 },
            iconCheckmark: { color: e.colors.green500 },
            countBadge: { height: e.spaces.space32, width: e.spaces.space32 },
            countBadgeContainer: {
              height: e.spaces.space32,
              width: e.spaces.space32,
              position: 'absolute',
              right: '-'.concat(e.spaces.space16),
              top: '-'.concat(e.spaces.space16),
            },
          }
        }),
        q = C.a.createElement(H.a, { style: W.icon }),
        G = C.a.forwardRef(function (e, t) {
          return C.a.createElement(z, i()({}, e, { ref: t }))
        }),
        X = E.forwardRef(G)
      t.a = X
    },
    'Fcw+': function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('VPAj'),
        c = (n('jQ3i'), n('x4t0'), n('ERkP')),
        l = n.n(c),
        s = n('kY28'),
        d = n('CUXw'),
        u = function (e) {
          var t = e.entry,
            n = t.content.id,
            o = t.index,
            i = e.onClick,
            r = e.selectedTweetIds,
            a = e.withSelectIcon
          return l.a.createElement(d.a, {
            index: o,
            isSelected: null == r ? void 0 : r.includes(n),
            onClick: i,
            replyContext: s.a.ReplyContextTypes.None,
            tweetId: n,
            withActions: !1,
            withSelectIcon: a,
          })
        },
        h = l.a.memo(u)
      t.default = function (e) {
        return r
          .b({
            component: h,
            isClickable: Object(a.a)(!0),
            isFocusable: Object(a.a)(!0),
            shouldDisplayBorder: Object(a.a)(!0),
          })
          .getHandler(function () {
            return i()({}, e)
          })
      }
    },
    KQRq: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('VPAj'),
        c = n('97Jx'),
        l = n.n(c),
        s = n('ERkP'),
        d = n.n(s),
        u = n('P1oR'),
        h = n('Zejx'),
        p = n('rxPX'),
        m = function (e, t) {
          var n,
            o = t.module.selectMetadata(e)
          return (
            (null == o || null === (n = o.reader_mode_config) || void 0 === n ? void 0 : n.is_reader_mode_available) ||
            !1
          )
        },
        v = function (e, t) {
          var n,
            o = t.entry
          return null !== (n = o.content.socialContext) && void 0 !== n && n.topicContext
            ? h.a.select(e, o.content.socialContext.topicContext.topicId)
            : void 0
        },
        _ = Object(p.a)()
          .propsFromState(function () {
            return { readerModeAvailable: m, topic: v }
          })
          .propsFromActions(function (e) {
            return { applyFeedbackAction: e.module.applyFeedbackAction }
          }),
        f = n('M6G0'),
        w = n('x5Pi'),
        b = n('Irs7'),
        C = n('Qtnm'),
        y = _(function (e) {
          var t = e.allowDownvote,
            n = e.applyFeedbackAction,
            o = e.createAdditionalProps,
            i = void 0 === o ? Object(a.a)({}) : o,
            r = e.dismissable,
            c = void 0 !== r && r,
            s = e.entry,
            h = e.feedbackItems,
            p = e.readerModeAvailable,
            m = e.topic,
            v = Object(b.b)(),
            _ = s.content,
            y = _.conversation_annotation,
            g = _.forwardPivot,
            k = _.hasModeratedReplies,
            I = _.id,
            T = _.innerForwardPivot,
            E = _.innerTombstoneInfo,
            A = _.socialContext,
            x = _.topicFollowPrompt,
            S = s.conversationPosition,
            P = s.referringContext,
            O = (P = void 0 === P ? {} : P).contextTweetId,
            D = P.contextualClientEventInfo,
            F = P.hideMedia,
            M = P.promotedContent,
            R = P.socialContext,
            U = P.topicFollowPrompt,
            L = Object(C.a)(v, n, s, h, c).onTweetDismiss,
            j = d.a.useMemo(
              function () {
                return Object(f.e)(v.contextualScribeNamespace, D, S)
              },
              [v.contextualScribeNamespace, D, S],
            ),
            B = d.a.useMemo(
              function () {
                return Object(w.d)({ socialContext: A, topic: m })
              },
              [A, m],
            ),
            N = i(s, { readerModeAvailable: p, topic: m }, { applyFeedbackAction: n })
          return d.a.createElement(
            u.a,
            l()(
              {
                allowDownvote: t,
                contextTweetId: O,
                conversationAnnotation: y,
                forwardPivotInfo: g,
                hasModeratedReplies: k,
                innerForwardPivotInfo: T,
                onTweetDismiss: L,
                promotedContent: M,
                quotedTweetTombstoneInfo: E,
                readerModeAvailable: p,
                scribeData: v.contextualScribeData,
                scribeNamespace: j,
                socialContext: B || R,
                topicFollowPrompt: x || U,
                tweetId: I,
                withActions: !0,
                withInlineMedia: !F,
                withSocialContext: !0,
              },
              N,
            ),
          )
        })
      t.default = function (e) {
        return r
          .b({
            component: y,
            divider: e.divider || {},
            defaultScribeNamespace: f.a,
            getBehavioralEventContextOverride: f.c,
            getScribeDataItem: f.d,
            isFocusable: Object(a.a)(!0),
            shouldDisplayBorder: Object(f.f)(!1),
          })
          .getHandler(function () {
            return i()({}, e)
          })
      }
    },
    M6G0: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'f', function () {
          return d
        }),
        n.d(t, 'd', function () {
          return u
        }),
        n.d(t, 'e', function () {
          return h
        })
      var o = n('yiKp'),
        i = n.n(o),
        r = (n('LW0h'), n('7x/C'), n('Rp9C')),
        a = { component: 'tweet' },
        c = { component: 'thread' },
        l = { serversideContextType: 'tweet' },
        s = function (e) {
          var t,
            n,
            o,
            r = null !== (t = e.content.retweetedStatusId) && void 0 !== t ? t : e.content.id,
            a = i()(i()({}, l), {}, { serversideContextId: r })
          return {
            viewType: e.type,
            token:
              null === (n = e.itemMetadata) || void 0 === n || null === (o = n.clientEventInfo) || void 0 === o
                ? void 0
                : o.entityToken,
            clientEntity: a,
          }
        },
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          return function (t) {
            var n = t.conversationPosition,
              o = t.conversationTreeMetadata
            return !(
              e ||
              (n &&
                !n.isEnd &&
                (!o ||
                  !1 !== o.descendantConnector ||
                  0 !==
                    o.indents.filter(function (e) {
                      return 'line' === e.displayType
                    }).length))
            )
          }
        },
        u = function (e) {
          return r.a.getTweetURTEntryItem(e)
        },
        h = function (e, t, n) {
          return i()(
            i()({}, e),
            {},
            {
              section:
                'descendant' === (null == n ? void 0 : n.position)
                  ? 'conversation_descendants'
                  : 'ancestor' === (null == n ? void 0 : n.position)
                  ? 'conversation_ancestors'
                  : e.section,
              component: (null == t ? void 0 : t.component) || e.component,
              action: (null == t ? void 0 : t.action) || e.action,
              element: (null == t ? void 0 : t.element) || e.element,
            },
          )
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
        p = n('5Yy7'),
        m = n.n(p),
        v = n('2VqO'),
        _ = n.n(v),
        f = n('KEM+'),
        w = n.n(f),
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
        g = n.n(y),
        k = n('TZwD'),
        I = n('6rlp'),
        T = n('RqPI'),
        E = n('1YZw'),
        A = n('Ig1G'),
        x = n('eSoz'),
        S = n('0pUJ'),
        P = n('Z6aJ'),
        O = n('SrIh'),
        D = n('Fmkq'),
        F = n('j7tW'),
        M = n('Zejx'),
        R = n('XOJV'),
        U = n('G6rE'),
        L = n('xZGM'),
        j = n('jL08'),
        B = n('rxPX'),
        N = n('0KEI'),
        H = n('EGrD'),
        V = n('x5Pi'),
        K = n('P1r1'),
        z = function (e, t) {
          return Object(F.b)(e, t.tweetId)
        },
        W = function (e, t) {
          return t.tweetId
        },
        q = function (e, t) {
          return t.contextTweetId
        },
        G = function (e, t) {
          var n = t.promotedContent,
            o = t.tweetId
          if (n && n.advertiser) return U.e.select(e, n.advertiser.id_str)
          if (n && P.a.isPromoted(n)) {
            var i = n.advertiser_name
            Object(O.a)('No advertiser info for non-URT promoted tweet', { extra: { advertiser_name: i, tweetId: o } })
          }
        },
        X = function (e, t) {
          return t.socialContext
        },
        J = function (e, t) {
          var n = t.socialContext,
            o = n && n.topicContext
          return o ? M.a.select(e, o.topicId) : void 0
        },
        Q = function (e, t) {
          var n = R.a.createHydratedTweetSelector(W)(e, t)
          return null != n && n.community_id_str ? x.c.select(e, null == n ? void 0 : n.community_id_str) : void 0
        },
        Y = function (e, t) {
          var n = R.a.createHydratedTweetSelector(W)(e, t),
            o = null == n ? void 0 : n.quoted_status,
            i = null == o ? void 0 : o.community_id_str
          return i ? x.c.select(e, i) : void 0
        },
        Z = function (e, t) {
          return 'PUSH' === t.history.action
        },
        $ = function (e, t) {
          return Object(L.D)(e, L.l)
        },
        ee = function (e, t) {
          return Object(L.B)(e, L.l)
        },
        te = Object(B.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: H.c,
              articleDomains: j.b,
              community: Q,
              contextTweet: R.a.createHydratedTweetSelector(q),
              daysSinceDownvoteEducation: ee,
              displaySensitiveMedia: K.k,
              explicitSocialContext: X,
              isForwardNavigation: Z,
              isNsfwUser: K.t,
              isPinned: z,
              loggedInUser: U.e.selectLoggedInUser,
              promotedContentAdvertiser: G,
              quoteTweetCommunity: Y,
              shouldShowDownvoteFullscreenEducation: $,
              topic: J,
              tweet: R.a.createHydratedTweetSelector(W),
              userCountry: T.z,
              userLanguage: T.p,
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
              p = e.isPinned,
              m = e.loggedInUser,
              v = e.promotedContentAdvertiser,
              _ = e.quoteTweetCommunity,
              f = e.shouldShowDownvoteFullscreenEducation,
              w = e.topic,
              b = e.tweet,
              C = e.userCountry,
              y = e.userLanguage,
              g = c
                ? Object(V.f)(c, null == m ? void 0 : m.id_str, a)
                : b
                ? Object(V.f)(b, null == m ? void 0 : m.id_str, a)
                : void 0,
              k =
                null == b ||
                null === (t = b.card) ||
                void 0 === t ||
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (o = n.domain) ||
                void 0 === o
                  ? void 0
                  : o.string_value,
              I = Object(j.a)(r, k),
              T = null == b ? void 0 : b.quoted_status,
              E = T ? Object(V.f)(T, null == m ? void 0 : m.id_str, _) : void 0
            return {
              adFreeArticleDomains: i,
              community: a,
              contextTweet: c,
              daysSinceDownvoteEducation: l,
              displaySensitiveMedia: s,
              isCardArticle: I,
              isForwardNavigation: u,
              isNsfwUser: h,
              isPinned: p,
              loggedInUser: m,
              promotedContentAdvertiser: v,
              quoteTweetSocialContextProps: E && Object(V.e)(E),
              shouldShowDownvoteFullscreenEducation: f,
              socialContext: d || g,
              topic: w,
              tweet: b,
              userCountry: C,
              userLanguage: y,
              withCommunityModerationAuthority: Object(A.c)(null == a ? void 0 : a.role),
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: L.z,
              addToast: E.b,
              block: U.e.block,
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_DETAIL_CONTAINER',
              ),
              fetchAdFreeToken: H.a,
              fetchCommunityIfNeeded: x.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: M.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: H.b,
              log: I.a,
              mute: S.a,
              updateHeadsUp: R.a.updateHeadsUp,
              richScribeAction: D.richScribeAction,
              setArticlesVisited: j.e,
              unblock: U.e.unblock,
              undoTopicNotInterested: M.a.undoNotInterested,
              unmute: U.e.unmute,
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
        pe = le.a.i859a9d3,
        me = de.a.create(function (e) {
          return {
            root: { borderTopWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: 'solid' },
            callout: { margin: e.spaces.space8, width: 'auto' },
          }
        }),
        ve = function (e) {
          var t = e.onAction,
            n = e.onClose,
            o = Object(re.b)()
          g.a.useEffect(
            function () {
              o.scribe({ section: 'reply_voting_nux', element: 'pre_downvote', action: 'impression' })
            },
            [o],
          )
          var i = g.a.createElement(
            le.a.I18NFormatMessage,
            { $i18n: 'id9ba4fb' },
            g.a.createElement(ie.a, { accessibilityLabel: he }),
          )
          return g.a.createElement(
            ae.a,
            { style: me.root },
            g.a.createElement(se.a, {
              action: { label: pe, link: '' },
              headline: ue,
              onAction: t,
              onClose: n,
              style: me.callout,
              text: i,
              withCloseButton: !0,
            }),
          )
        },
        _e = n('6bZg'),
        fe = n('LSr9'),
        we = n('RuTB'),
        be = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(6), n.e(9), n.e(78)]).then(n.bind(null, 'x8Sc'))
          },
          renderPlaceholder: function (e, t) {
            return g.a.createElement(we.a, { hasError: e, onRetry: t })
          },
        }),
        Ce = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(6), n.e(84)]).then(n.bind(null, 'RrO2'))
          },
          renderPlaceholder: function (e, t) {
            return g.a.createElement(we.a, { hasError: e, onRetry: t })
          },
        }),
        ye = n('iFPY'),
        ge = n('hACr'),
        ke = n('Nh1N'),
        Ie = n('FGLp'),
        Te = le.a.de21174c,
        Ee = le.a.haebcf51,
        Ae = le.a.i859a9d3,
        xe = de.a.create(function (e) {
          return { callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } }
        }),
        Se = function () {
          var e = Object(re.b)()
          return (
            Object(Ie.a)(function () {
              e.scribe({ element: 'left_conversation_banner', action: 'impression' })
            }),
            g.a.createElement(
              ae.a,
              { style: xe.callout },
              g.a.createElement(se.a, {
                Icon: ke.a,
                action: {
                  label: Ae,
                  link: 'https://help.twitter.com/using-twitter/mentions-and-replies#mention-control',
                },
                headline: Te,
                text: Ee,
                type: 'primary',
              }),
            )
          )
        },
        Pe = n('jQy5'),
        Oe = n('vMOa'),
        De = n('Rp9C'),
        Fe = n('xM7j'),
        Me = n('BLtI'),
        Re = n('3zeG'),
        Ue = n('aITJ'),
        Le = n('TnY3'),
        je = n('mqpi'),
        Be = n('v6aA'),
        Ne = n('E0cF'),
        He = n('OIC0'),
        Ve = n('+pKb'),
        Ke = n('/Ikv'),
        ze = n('7JQg'),
        We = n('cFuS'),
        qe = n('24HD'),
        Ge = n('fz3c'),
        Xe = n('4hQ9'),
        Je = n('oQhu'),
        Qe = n('mN6z'),
        Ye = n('ONCy'),
        Ze = n('Cqiq'),
        $e = le.a.f277e949
      function et(e, t, n) {
        var o = De.a.addTweetToItems(n ? n.items : [], e, t)
        return C()(C()({}, n || {}), {}, { items: o })
      }
      var tt = (function (e) {
        m()(n, e)
        var t = _()(n)
        function n() {
          var e, o, i
          l()(this, n)
          for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s]
          return (
            (i = t.call.apply(t, [this].concat(c))),
            w()(h()(i), 'state', {
              displayReported: !1,
              enableKeyboardShortcuts: !1,
              showDownvoteFullscreenFromInline: !1,
              replyPressToggle: !1,
              showBlockOrUnblockConfirmation: !1,
            }),
            w()(h()(i), '_shouldDisable', je.b.bind(null, i.context.featureSwitches)),
            w()(h()(i), '_downvoteEnabled', i.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
            w()(
              h()(i),
              '_isArticleNudgeEnabled',
              i.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
            ),
            w()(h()(i), '_isCommunitiesEnabled', i.context.featureSwitches.isTrue('c9s_enabled')),
            w()(
              h()(i),
              '_hasClaimsForAdFreeArticles',
              null === (e = i.context.userClaims) || void 0 === e
                ? void 0
                : e.isTrueAndEnabled('subscriptions_feature_1006'),
            ),
            w()(
              h()(i),
              '_conversationHeadsUpFSValue',
              null === (o = i.context.featureSwitches) || void 0 === o
                ? void 0
                : o.getStringValue('conversational_safety_heads_up_treatment_A_enabled'),
            ),
            w()(
              h()(i),
              '_downvoteNuxDays',
              i.context.featureSwitches.getNumberValue('rweb_reply_downvote_nux_inline_days'),
            ),
            w()(
              h()(i),
              '_getScribeData',
              Object(Je.a)(function (e, t, n) {
                var o = et(e, t, n)
                return (
                  (i._cachedScribeData && Object(Qe.a)(o, i._cachedScribeData)) || (i._cachedScribeData = o),
                  i._cachedScribeData
                )
              }),
            ),
            w()(h()(i), '_renderConversationControlsTooltip', function () {
              var e = i.context.loggedInUserId,
                t = i.props.tweet
              if (!t) return !1
              var n = Ne.a.getOriginalTweet(t),
                o = !!n.community_id_str,
                r = n.user.id_str === e,
                a = n.reply_count > 0
              return r && a && !n.in_reply_to_status_id_str && !o
            }),
            w()(h()(i), '_renderBlockOrUnblockConfirmationSheet', function () {
              var e = i.props.tweet
              if (!e) return null
              var t = e.user
              return Object(qe.j)({
                confirmation: Object(qe.h)(t),
                onClose: i._handleBlockOrUnblockConfirmClose,
                handleConfirm: i._handleBlockOrUnblockUserConfirm,
              })
            }),
            w()(h()(i), '_shouldShowDownvoteInlineEducation', function () {
              var e = i.props.daysSinceDownvoteEducation
              return i._allowDownvoteEducations() && null !== e && e >= i._downvoteNuxDays
            }),
            w()(h()(i), '_shouldShowDownvoteFullscreenEducation', function () {
              var e = i.props,
                t = e.isForwardNavigation,
                n = e.shouldShowDownvoteFullscreenEducation
              return t && i._allowDownvoteEducations() && n
            }),
            w()(h()(i), '_allowDownvoteEducations', function () {
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
            w()(h()(i), '_getInlineCalloutInfo', function () {
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
                Object(Xe.e)({
                  displaySensitiveMedia: t,
                  featureSwitches: s,
                  isNsfwUser: n,
                  loggedInUserId: d,
                  tweet: r,
                  userCountry: a,
                  userLanguage: c,
                })
              )
                return Object(Xe.d)(r, o, s)
            }),
            w()(h()(i), '_handleReplyPress', function () {
              i.setState({ replyPressToggle: !i.state.replyPressToggle })
            }),
            w()(h()(i), '_handleModeratedIconClick', function () {
              return i._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
            }),
            w()(h()(i), '_handleModeratedIconShown', function () {
              return i._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
            }),
            w()(h()(i), '_handleBirdwatchNotesIconClick', function () {
              return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
            }),
            w()(h()(i), '_handleBirdwatchNotesIconShown', function () {
              return i._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
            }),
            w()(h()(i), '_handleFocus', function () {
              i.setState({ enableKeyboardShortcuts: !0 })
            }),
            w()(h()(i), '_handleBlur', function () {
              i.setState({ enableKeyboardShortcuts: !1 })
            }),
            w()(h()(i), '_handleShowReportedTweet', function () {
              i.setState({ displayReported: !0 })
            }),
            w()(h()(i), '_getShortcutKeyHandlers', function () {
              var e = i._getMuteOrUnmuteAction(),
                t = e.onClick,
                n = e.shortcutKey,
                o = i._getBlockOrUnblockAction().shortcutKey,
                r = i.context.loggedInUserId,
                a = i.props.tweet
              if (!a) return {}
              var c = a.user.id_str === r
              return C()(C()({}, n && w()({}, n, t)), o && !c && w()({}, o, i._handleBlockOrUnblockConfirmOpen))
            }),
            w()(h()(i), '_handleBlockOrUnblockConfirmOpen', function () {
              i.setState({ showBlockOrUnblockConfirmation: !0 })
            }),
            w()(h()(i), '_handleBlockOrUnblockConfirmClose', function () {
              i.setState({ showBlockOrUnblockConfirmation: !1 })
            }),
            w()(h()(i), '_handleBlockOrUnblockUserConfirm', function () {
              var e = i._getBlockOrUnblockAction().onClick
              i._handleBlockOrUnblockConfirmClose(), e && e()
            }),
            w()(h()(i), '_getBlockOrUnblockAction', function () {
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
              return Object(k.a)(C()(C()({}, d), {}, { block: n, unblock: l, user: s, promotedContent: a }))
            }),
            w()(h()(i), '_getMuteOrUnmuteAction', function () {
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
            w()(
              h()(i),
              '_getRenderCurationActionMenu',
              Object(Je.a)(function (e, t, n, o, i, r, a, c, l, s, d, u, h, p, m, v) {
                return function () {
                  return (
                    !!l &&
                    g.a.createElement(Re.a, {
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
                      promotedContent: c,
                      tweet: l,
                      userCountry: m,
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
            w()(h()(i), '_scribeAction', function (e, t, n, o) {
              var r = i.props,
                a = r.promotedContent,
                c = r.richScribeAction,
                l = r.scribeNamespace,
                s = r.tweet,
                d = s ? De.a.forTweet(s, a) : void 0,
                u = o ? C()(C()({}, d), {}, { article_details: { is_ad_free: o } }) : d,
                h = C()(C()({ items: u ? [u] : [] }, Object(Ye.a)(n ? { click_tracking_embed_details: n } : null)), t)
              c(C()(C()({}, l), e), h)
            }),
            w()(h()(i), '_handleReplyContextClick', function (e, t) {
              i._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
            }),
            w()(h()(i), '_handlePromotedIndicatorClick', function () {
              i._handleAsyncPromotedEvent(We.b.FOOTER_PROFILE)
            }),
            w()(h()(i), '_handleMediaClick', function () {
              i._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                i._handleAsyncPromotedEvent(We.b.EMBEDDED_MEDIA)
            }),
            w()(h()(i), '_handleEntityClick', function (e, t, n) {
              var o = i.props,
                r = o.adFreeArticleDomains,
                c = o.createLocalApiErrorHandler,
                l = o.fetchAdFreeToken,
                s = o.tweet,
                d = We.a[t],
                u = _e.a[t],
                h = De.a.getClickTrackingEmbedDetails(i.props.promotedContent, n)
              if (d) {
                var p =
                  d === We.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                    ? { url: e.currentTarget.href }
                    : void 0
                i._handleAsyncPromotedEvent(d, p)
              }
              t === He.a.URL && h && i._scribeAction({ action: Ve.b.CLICK_ID_EMBED }, void 0, h)
              var m = !1
              if (i._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                var v = new URL(n.expandedUrl).hostname,
                  _ = new fe.a(l, c()).getAdFreeArticlesClickHandler({
                    destinationUrl: n.embeddedUrl,
                    linkDomain: v,
                    adFreeArticleDomains: r,
                    tweetAuthorUserId: null == s ? void 0 : s.user.id_str,
                  }),
                  f = a()(_, 2),
                  w = f[0],
                  b = f[1]
                w && (b(e), (m = !0))
              }
              if (t === He.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                return i._scribeAction(
                  { element: 'interactive_text', action: u },
                  { interactive_text_details: { id: n.id } },
                  void 0,
                  m,
                )
              u && i._scribeAction({ action: u }, void 0, void 0, m)
            }),
            w()(h()(i), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
              return function () {
                i._scribeAction({ component: e, element: 'learn_more', action: 'click' })
              }
            }),
            w()(h()(i), '_handlePoliticalSponsorWebsiteClick', function () {
              i._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
            }),
            w()(h()(i), '_handleAnalyticsClick', function () {
              i._scribeAction({ element: 'analytics', action: 'click' })
            }),
            w()(h()(i), '_handlePromoteButtonClick', function () {
              i._scribeAction({ element: 'promote', action: 'click' })
            }),
            w()(h()(i), '_handlePromoteAgainButtonClick', function () {
              i._scribeAction({ element: 'promote_again', action: 'click' })
            }),
            w()(h()(i), '_handleAvatarClick', function () {
              var e = i.props.tweet
              i._scribeAction(
                { element: 'avatar', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                i._handleAsyncPromotedEvent(We.b.PROFILE_IMAGE_CLICK)
            }),
            w()(h()(i), '_handleScreenNameClick', function () {
              var e = i.props.tweet
              i._scribeAction(
                { element: 'user', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                i._handleAsyncPromotedEvent(We.b.SCREEN_NAME_CLICK)
            }),
            w()(h()(i), '_handleCaretClick', function () {
              i._scribeAction({ element: 'caret', action: 'click' })
            }),
            w()(h()(i), '_handleCommunityFetch', function () {
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
            w()(h()(i), '_handleHeadsUpRender', function () {
              var e = i.props,
                t = e.conversationAnnotation,
                n = e.tweet,
                o = e.updateHeadsUp
              if (!n) return null
              var r = Ne.a.getOriginalTweet(n),
                a = (null == r ? void 0 : r.reply_count) > 20
              if (!('Political' === (null == t ? void 0 : t.conversation_annotation_type) && a)) return null
              o(r.id_str)
            }),
            w()(h()(i), '_handleTopicFetch', function () {
              var e,
                t = i.props,
                n = t.createLocalApiErrorHandler,
                o = t.fetchTopicIfNeeded,
                r = t.socialContext,
                a = null == r || null === (e = r.topicContext) || void 0 === e ? void 0 : e.topicId
              a && o(a).catch(n())
            }),
            w()(h()(i), '_handleUndoTopicNotInterested', function () {
              var e = i.props,
                t = e.createLocalApiErrorHandler,
                n = e.topic,
                o = e.undoTopicNotInterested
              i._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && o(n.id).catch(t())
            }),
            w()(h()(i), '_handleCardLinkClick', function (e) {
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
              var m = null == d || null === (t = d.card) || void 0 === t ? void 0 : t.binding_values
              if (i._hasClaimsForAdFreeArticles && m) {
                var v = new fe.a(c, r()).getAdFreeArticlesClickHandler({
                    destinationUrl: Ke.a.getBindingValue(m, 'card_url'),
                    linkDomain: Ke.a.getBindingValue(m, 'domain'),
                    adFreeArticleDomains: o,
                  }),
                  _ = a()(v, 2),
                  f = _[0],
                  w = _[1]
                f && w(e)
              }
            }),
            w()(h()(i), '_handleMediaHashtagHighlightClick', function () {
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
                this._shouldShowDownvoteInlineEducation() && e(L.l, { updateTimestamp: !0 })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.context.loggedInUserId,
                  t = this.props.tweet
                if (!t) return null
                var n = t.user.id_str === e,
                  o = Object(Ze.b)(t.withheld_scope),
                  i = Object(Ge.h)(t) && !this.state.displayReported
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  o
                    ? g.a.createElement(
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
                  return g.a.createElement(ye.a, {
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
                  p = t.isPinned,
                  m = t.location,
                  v = t.loggedInUser,
                  _ = t.onTweetDismiss,
                  f = t.promotedContent,
                  w = t.promotedContentAdvertiser,
                  b = t.quoteTweetSocialContextProps,
                  C = t.quotedTweetTombstoneInfo,
                  y = t.readerModeAvailable,
                  k = t.replyDropdownSelection,
                  I = t.scribeData,
                  T = t.scribeNamespace,
                  E = t.socialContext,
                  A = t.topic,
                  x = t.topicFollowPrompt,
                  S = t.tweet,
                  P = t.userCountry,
                  O = t.userLanguage,
                  D = t.withActions,
                  F = t.withCommunityModerationAuthority,
                  M = t.withHideReply,
                  R = t.withInlineMedia,
                  U = t.withSocialContext,
                  L = this.context.loggedInUserId,
                  j = {
                    allowDownvote: n,
                    contextTweet: r,
                    forwardPivotInfo: l,
                    hasModeratedReplies: s,
                    innerForwardPivotInfo: u,
                    promotedContent: f,
                    promotedContentAdvertiser: w,
                    quotedTweetTombstoneInfo: C,
                    quoteTweetSocialContextProps: b,
                    readerModeAvailable: y,
                    socialContext: E,
                    topic: A,
                    topicFollowPrompt: x,
                    tweet: S,
                    withActions: D,
                    withInlineMedia: R,
                    withSocialContext: U,
                  },
                  B = this.state.enableKeyboardShortcuts
                if (!S) return null
                var N = Object(Qe.a)(this._cachedScribeNamespace, T)
                    ? this._cachedScribeNamespace
                    : (this._cachedScribeNamespace = T),
                  H = S && S.card && !S.is_quote_status ? S.card.url : void 0,
                  V = Ne.a.getOriginalTweet(S),
                  K = V.user.id_str === L,
                  z = !V.in_reply_to_status_id_str && K && !V.community_id_str,
                  W = this._renderConversationControlsTooltip(),
                  q = !!V.in_reply_to_status_id_str,
                  G = (null == V ? void 0 : V.reply_count) > 20,
                  X =
                    'Political' === (null == c ? void 0 : c.conversation_annotation_type) &&
                    (null === (e = S.headsUp) || void 0 === e ? void 0 : e.showBanner) &&
                    !q &&
                    G,
                  J =
                    this.context.featureSwitches.isTrue(
                      'responsive_web_deamplification_replies_dropdown_selector_enabled',
                    ) && S.reply_count > 0
                return g.a.createElement(
                  ze.c,
                  { data: this._getScribeData(S.retweeted_status || S, f, I), namespace: N },
                  g.a.createElement(
                    ge.a,
                    { enabled: !!B, handlers: this._getShortcutKeyHandlers() },
                    this._renderLeftConversationBanner(),
                    g.a.createElement(
                      Me.b,
                      i()({}, j, {
                        enableKeyboardShortcuts: B,
                        excludeCardUrl: H,
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
                          null == l ? void 0 : l.displayType,
                          d,
                          h,
                          p,
                          m,
                          this._handleCaretClick,
                          _,
                          f,
                          Ne.a.getOriginalTweet(S),
                          z,
                          W,
                          M,
                          F,
                          null == a ? void 0 : a.entityToken,
                          P,
                          O,
                        ),
                        showConversationHeadsUp: X,
                        tweet: S,
                      }),
                    ),
                    J ? g.a.createElement(Oe.a, { changeDropdownState: o, replyDropdownSelection: k }) : null,
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
                  ? g.a.createElement(Se, null)
                  : null
              },
            },
            {
              key: '_renderDownvoteEducation',
              value: function () {
                var e = this,
                  t = this.props.addFlag,
                  n = this.state.showDownvoteFullscreenFromInline
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  n || this._shouldShowDownvoteFullscreenEducation()
                    ? g.a.createElement(oe, {
                        onDismiss: function () {
                          n ? e.setState({ showDownvoteFullscreenFromInline: !1 }) : t(L.l)
                        },
                      })
                    : null,
                  this._shouldShowDownvoteInlineEducation()
                    ? g.a.createElement(ve, {
                        onAction: function () {
                          e.setState({ showDownvoteFullscreenFromInline: !0 })
                        },
                        onClose: function () {
                          t(L.l, { updateTimestamp: !0 })
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
                var c = a && !this._shouldDisable(o, je.a.Reply),
                  l = Ue.b.isMobileOS() ? be : Ce
                return c
                  ? g.a.createElement(l, { history: t, location: n, parentTweetId: i, replyPressToggle: r })
                  : null
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props.tweet
                return (
                  !!e &&
                  g.a.createElement(Ze.a, {
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
                  var t = Ne.a.getOriginalTweet(e),
                    n = Object(Ge.c)(t.reportingVisibility)
                  return g.a.createElement(
                    Fe.a,
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
      })(g.a.Component)
      w()(tt, 'contextType', Be.a)
      var nt = Object(Le.a)(te(tt))
      t.b = Object(ze.a)({ component: 'tweet' })(nt)
    },
    Qtnm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var o = n('euJ+'),
        i = n('ERkP'),
        r = n.n(i),
        a = function (e, t, n, i, a) {
          var c = null == i ? void 0 : i.length,
            l = a && !c,
            s = r.a.useCallback(
              function () {
                t({ entry: n, feedbackKeys: [o.b] }), e.scribe({ element: o.g(o.a, n), action: 'click' })
              },
              [e, n, t],
            )
          return { onTweetDismiss: l ? s : void 0 }
        }
    },
    ReVx: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('VPAj'),
        c = n('97Jx'),
        l = n.n(c),
        s = (n('hBpG'), n('7x/C'), n('ERkP')),
        d = n.n(s),
        u = n('xZXe'),
        h = n('wtjx'),
        p = n('Zejx'),
        m = n('rxPX'),
        v = function (e, t) {
          var n = t.entry
          return t.module.selectIsUnread(e, n.entryId)
        },
        _ = function (e, t) {
          var n,
            o = t.entry
          return null !== (n = o.content.socialContext) && void 0 !== n && n.topicContext
            ? p.a.select(e, o.content.socialContext.topicContext.topicId)
            : void 0
        },
        f = Object(m.a)()
          .propsFromState(function () {
            return { isUnread: v, topic: _ }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              saveAsRecentSearch: h.a,
              applyFeedbackAction: t.applyFeedbackAction,
              applyReactionInstructions: t.applyReactionInstructions,
            }
          }),
        w = n('Df4Q'),
        b = n('M6G0'),
        C = n('x5Pi'),
        y = n('3XMw'),
        g = n.n(y),
        k = n('6vad'),
        I = n('MWbm'),
        T = g.a.e25a0c3a,
        E = function (e) {
          return d.a.createElement(I.a, null, d.a.createElement(k.b, { text: T }), d.a.createElement(u.a, e))
        },
        A = n('pbku'),
        x = n('VrCx'),
        S = n('kY28'),
        P = n('Irs7'),
        O = n('Qtnm'),
        D = function (e) {
          var t,
            n = e.allowDownvote,
            o = void 0 !== n && n,
            i = e.applyFeedbackAction,
            r = e.applyReactionInstructions,
            c = e.bookmarkFolderId,
            s = e.createAdditionalProps,
            h = void 0 === s ? Object(a.a)({}) : s,
            p = e.dismissable,
            m = void 0 !== p && p,
            v = e.displayBlocked,
            _ = e.entry,
            f = e.feedbackItems,
            y = e.hideConversationControlsEducationText,
            g = void 0 !== y && y,
            k = e.hideExclusivityInfoEducationTextInReplies,
            I = void 0 !== k && k,
            T = e.hideTrustedFriendsEducationTextInReplies,
            D = void 0 !== T && T,
            F = e.isReaderMode,
            M = void 0 !== F && F,
            R = e.isUnread,
            U = e.saveAsRecentSearch,
            L = e.shouldSelfThreadIncludeAvatar,
            j = void 0 !== L && L,
            B = e.shouldStoreTypeaheadItem,
            N = e.showWithheldBannerOnMyTweets,
            H = void 0 !== N && N,
            V = e.topic,
            K = e.tweetTextSize,
            z = e.withActionsDisabled,
            W = void 0 !== z && z,
            q = e.withMuteConversation,
            G = void 0 !== q && q,
            X = e.withRemoveFromBookmarks,
            J = void 0 !== X && X,
            Q = e.withSelfThread,
            Y = void 0 !== Q && Q,
            Z = e.withUserPresence,
            $ = void 0 !== Z && Z,
            ee = e.withUnreadStyles,
            te = void 0 !== ee && ee,
            ne = Object(P.b)(),
            oe = _.content,
            ie = oe.conversation_annotation,
            re = oe.displayType,
            ae = oe.forwardPivot,
            ce = oe.hasModeratedReplies,
            le = oe.highlights,
            se = oe.id,
            de = oe.innerForwardPivot,
            ue = oe.innerTombstoneInfo,
            he = oe.promotedMetadata,
            pe = oe.replyBadge,
            me = oe.ruxContext,
            ve = oe.socialContext,
            _e = oe.topicFollowPrompt,
            fe = _.conversationPosition,
            we = _.conversationTreeMetadata,
            be = _.itemMetadata,
            Ce = _.referringContext,
            ye = (Ce = void 0 === Ce ? {} : Ce).contextTweetId,
            ge = Ce.contextualClientEventInfo,
            ke = Ce.focalTweetId,
            Ie = Ce.hideMedia,
            Te = Ce.socialContext,
            Ee = Ce.topicFollowPrompt
          fe
            ? (t = fe.showReplyContext && !M ? S.a.ReplyContextTypes.Isolated : S.a.ReplyContextTypes.None)
            : M && (t = S.a.ReplyContextTypes.None)
          var Ae = d.a.useCallback(
              function () {
                return r({ entry: _, triggerName: A.a.ON_LIKE })
              },
              [r, _],
            ),
            xe = !!_.conversationPosition && !_.conversationPosition.isStart,
            Se = d.a.useMemo(
              function () {
                return f && !M
                  ? {
                      markNotInterestedTopic: f.find(function (e) {
                        return e.feedbackKey === Object(w.b)(_.entryId)
                      }),
                    }
                  : void 0
              },
              [f, _.entryId, M],
            ),
            Pe = Object(O.a)(ne, i, _, f, m).onTweetDismiss,
            Oe = d.a.useMemo(
              function () {
                return Object(b.e)(ne.contextualScribeNamespace, ge, fe)
              },
              [ne.contextualScribeNamespace, ge, fe],
            ),
            De = d.a.useMemo(
              function () {
                return Object(C.d)({ socialContext: ve, topic: V })
              },
              [ve, V],
            ),
            Fe = {
              allowDownvote: o,
              bookmarkFolderId: c,
              contextTweetId: ye,
              contextualClientEventInfo: be.clientEventInfo,
              conversationPosition: fe,
              conversationTreeMetadata: we,
              conversationAnnotation: ie,
              displayBlocked: v,
              displayPromotedContent: !0,
              feedbackItems: f,
              focalTweetId: ke,
              forwardPivotInfo: ae,
              shouldStoreTypeaheadItem: B,
              hasModeratedReplies: ce,
              hideConversationControlsEducationText: g || xe,
              hideExclusivityInfoEducationTextInReplies: I,
              hideTrustedFriendsEducationTextInReplies: D,
              hitHighlights: null == le ? void 0 : le.textHighlights,
              injectedFeedbackItem: Se,
              innerForwardPivotInfo: de,
              isReaderMode: M,
              isUnread: te ? R : void 0,
              onTweetDismiss: Pe,
              onLike: Ae,
              quotedTweetTombstoneInfo: ue,
              replyBadge: pe,
              replyContext: t,
              ruxContext: me,
              saveAsRecentSearch: U,
              scribeData: ne.contextualScribeData,
              scribeNamespace: Oe,
              shouldSelfThreadIncludeAvatar: j,
              showWithheldBannerOnMyTweets: H,
              socialContext: De || Te,
              topicFollowPrompt: _e || Ee,
              tweetId: se,
              tweetTextSize: K,
              urtPromotedContent: he,
              withActions: !0,
              withActionsDisabled: W,
              withInlineMedia: !Ie || M,
              withMuteConversation: G,
              withRemoveFromBookmarks: J,
              withSelfThread: Y,
              withSocialContext: !0,
              withUserPresence: $,
            },
            Me = h(
              _,
              { isUnread: R, topic: V },
              { saveAsRecentSearch: U, applyFeedbackAction: i, applyReactionInstructions: r },
            )
          switch (re) {
            case x.a.EmphasizedPromotedTweet:
              return d.a.createElement(E, l()({}, Fe, Me))
            default:
              return d.a.createElement(u.a, l()({}, Fe, Me))
          }
        },
        F = f(d.a.memo(D))
      t.default = function (e) {
        return r
          .b({
            component: F,
            divider: e.divider || {},
            defaultScribeNamespace: e.isReaderMode ? b.b : b.a,
            getBehavioralEventContextOverride: b.c,
            getScribeDataItem: b.d,
            isFocusable: Object(a.a)(!0),
            shouldDisplayBorder: Object(b.f)(e.isReaderMode),
          })
          .getHandler(function () {
            return i()({}, e)
          })
      }
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
          p = {
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
        return Object(r.g)(p)
      }
    },
    b5s6: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        i = n.n(o),
        r = n('m3Bd'),
        a = n.n(r),
        c = n('ERkP'),
        l = n.n(c),
        s = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        h = n('rxPX'),
        p = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        v = function (e, t) {
          var n = t.tweetId,
            o = n && d.a.select(e, n)
          return o ? Object(u.g)(e, o) : void 0
        },
        _ = Object(h.a)()
          .propsFromState(function () {
            return { community: v, hydratedTweet: d.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        f = n('YeIG'),
        w = n('uCxL'),
        b = n('x5Pi'),
        C = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        y = _(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            o = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            c = (e.tweetId, a()(e, C)),
            d = l.a.useContext(s.a),
            u = d.featureSwitches,
            h = d.loggedInUserId,
            p = null == r ? void 0 : r.community_id_str
          l.a.useEffect(
            function () {
              p && Object(f.a)(t) && o(p).catch(n())
            },
            [t, p, n, o],
          )
          var m = u.isTrue('responsive_web_alt_text_badge_enabled'),
            v = r && Object(b.f)(r, h, t),
            _ = v && Object(b.e)(v),
            y = u.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            w.a,
            i()({}, c, {
              loggedInUserId: h,
              shouldShowAltLabelAlways: m,
              socialContextProps: _,
              tweet: r,
              withReactions: y,
            }),
          )
        })
      t.a = y
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
        return p
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return v
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
        p = function (e) {
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
                  var p = Object(d.a)(h, c, 'default'),
                    m = u
                      ? [p.removeTweets(i()({}, u, !0)), p.injectEntry(a.k({ id: u, sortIndex: u }), { atTop: !1 })]
                      : []
                  return [].concat(m, [
                    p.removeTweets(i()({}, e, !0)),
                    p.injectEntry(
                      a.k({ id: e, content: { socialContext: { generalContext: l.a } }, sortIndex: 'NOT_USED' }),
                    ),
                  ])
                }
              },
            )
          }
        },
        m = function (e) {
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
        v = function (e, t) {
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
          p = e.unmute,
          m = e.user,
          v = function () {
            p(m.id_str, { promotedContent: u }).then(function () {
              t({ text: Object(c.d)(m.screen_name), behavioralEventEntityToken: n })
            }, l(a.a)),
              h({ element: 'unmute' })
          },
          _ = Object(c.a)(
            m,
            function () {
              d(m.id_str, { promotedContent: u }).then(function () {
                s && s({ userId: m.id_str, feedbackKeys: ['UnfollowEntity'] }),
                  t({
                    action: { label: r.a, onAction: v, behavioralEventViewType: 'unmute_person' },
                    behavioralEventEntityToken: n,
                    text: Object(c.b)(m.screen_name),
                  })
              }, l(i.a)),
                h({ element: 'mute' })
            },
            v,
          ),
          f = _.Icon,
          w = _.behavioralEventContext,
          b = _.onClick
        return { behavioralEventContext: w, Icon: f, text: _.text, onClick: b, shortcutKey: o.e.mute }
      }
    },
    kXdP: function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        i = n.n(o),
        r = n('t62R'),
        a = n('OiMc'),
        c = n('rHpw').a.create(function (e) {
          return {
            hoverText: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
            popover: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 4)'), minWidth: e.spaces.space64 },
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.hoverText
        return i.a.createElement(
          a.a,
          {
            contentStyle: c.popover,
            enableHover: !0,
            renderContent: function () {
              return i.a.createElement(r.b, { style: c.hoverText }, n)
            },
            withArrow: !0,
          },
          t,
        )
      }
    },
    pbku: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('yH/f')
      var o = Object.freeze({
        ON_LINGER: 'onLinger',
        ON_IS_RELEVANT: 'onIsRelevant',
        ON_SHOW_MORE: 'onShowMore',
        ON_LIKE: 'onLike',
      })
    },
    tvEI: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        i = n.n(o),
        r = n('ezF+'),
        a = n('VPAj'),
        c = n('ERkP'),
        l = n.n(c),
        s = n('b5s6'),
        d = function (e) {
          var t = e.entry,
            n = e.isCondensed,
            o = t.content,
            i = o.forwardPivot,
            r = o.id
          return l.a.createElement(s.a, { forwardPivotInfo: i, isCondensed: n, style: u.quotedTweet, tweetId: r })
        },
        u = n('rHpw').a.create(function (e) {
          return {
            quotedTweet: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: 0,
              marginBottom: e.componentDimensions.gutterVertical,
            },
          }
        }),
        h = l.a.memo(d),
        p = n('M6G0')
      t.default = function (e) {
        return r
          .b({
            component: h,
            divider: e.divider || {},
            defaultScribeNamespace: p.a,
            getBehavioralEventContextOverride: p.c,
            getScribeDataItem: p.d,
            isFocusable: Object(a.a)(!0),
            shouldDisplayBorder: Object(p.f)(!1),
          })
          .getHandler(function () {
            return i()({}, e)
          })
      }
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return m
      }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return I
        }),
        n.d(t, 'c', function () {
          return T
        })
      var o = n('KEM+'),
        i = n.n(o),
        r = n('yiKp'),
        a = n.n(r),
        c = (n('7x/C'), n('JtPf'), n('LW0h'), n('Ee2X'), n('Ssj5')),
        l = n('RqPI'),
        s = 'recentSearches',
        d = 'rweb.recentSearches',
        u = function (e) {
          return function (t, n, o) {
            return o.userPersistence.set(d, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        h = function (e, t) {
          var n = []
          if (e && e.user) {
            var o = e.user
            n = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== o.id)
            })
          } else if (e && e.topic) {
            var i = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== i.id)
            })
          } else if (e && e.event) {
            var r = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== r.id)
            })
          } else if (e && e.keyword) {
            var a = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== a.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        p = { fetched: !1, recentSearches: [] }
      var m = function (e) {
          return e.recentSearches.recentSearches
        },
        v = function (e) {
          return m(e)[0] || null
        },
        _ = function (e) {
          return e.recentSearches.fetched
        },
        f = 'rweb/recentSearches/INIT_FROM_CACHE',
        w = function (e) {
          return { type: f, payload: e }
        },
        b = 'rweb/recentSearches/REMOVE_QUERY',
        C = function (e) {
          return function (t, n, o) {
            o.userPersistence
            t({ payload: e, type: b })
            var i = n().recentSearches
            return Object(l.n)(n()) ? t(u(i.recentSearches)) : Promise.resolve()
          }
        },
        y = 'rweb/recentSearches/CLEAR_ALL',
        g = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: y })
            var o = t().recentSearches
            return Object(l.n)(t()) ? e(u(o.recentSearches)) : Promise.resolve()
          }
        },
        k = 'rweb/recentSearches/ADD_QUERY',
        I = function (e) {
          return function (t, n, o) {
            o.userPersistence
            t({ payload: e, type: k })
            var i = n().recentSearches
            return Object(l.n)(n()) ? t(u(i.recentSearches)) : Promise.resolve()
          }
        },
        T = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var o = n.userPersistence,
                    i = t()
                  return Object(l.n)(i)
                    ? o
                        .get(d)
                        .then(function (t) {
                          e(w(t))
                        })
                        .catch(function () {
                          e(w())
                        })
                    : (e(w()), Promise.resolve())
                })
          }
        }
      c.a.register(
        i()({}, s, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case k:
              var n = t.payload,
                o = n ? h(n, e.recentSearches) : []
              return o.length > 49 && o.splice(49, 1), n && o.unshift(n), a()(a()({}, e), {}, { recentSearches: o })
            case b:
              var i = t.payload,
                r = i ? h(i, e.recentSearches) : []
              return a()(a()({}, e), {}, { recentSearches: r })
            case y:
              return { fetched: !0, recentSearches: [] }
            case f:
              return a()(a()(a()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    xZXe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ke
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
        p = n('1Pcy'),
        m = n.n(p),
        v = n('5Yy7'),
        _ = n.n(v),
        f = n('2VqO'),
        w = n.n(f),
        b = n('KEM+'),
        C = n.n(b),
        y = n('yiKp'),
        g = n.n(y),
        k =
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
        I = n.n(k),
        T = n('ZyXd'),
        E = n('TZwD'),
        A = (n('ho0z'), n('RqPI')),
        x = n('1YZw'),
        S = n('Ig1G'),
        P = n('6rlp'),
        O = n('0pUJ'),
        D = n('Fmkq'),
        F = n('j7tW'),
        M = n('Zejx'),
        R = n('XOJV'),
        U = n('D5n3'),
        L = n('G6rE'),
        j = n('jL08'),
        B = n('eSoz'),
        N = n('rxPX'),
        H = n('0KEI'),
        V = n('EGrD'),
        K = n('x5Pi'),
        z = n('P1r1'),
        W = function (e, t) {
          var n = t.tweetId
          return Object(F.b)(e, n)
        },
        q = function (e, t) {
          return t.tweetId
        },
        G = function (e, t) {
          var n = t.urtAdvertiser,
            o = t.urtPromotedContent
          if (e && o) {
            var i = e.promoted_content
            return g()(
              g()({}, e),
              {},
              {
                promoted_content: g()(
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
        X = function (e, t) {
          return t.socialContext
        },
        J = function (e, t) {
          var n = t.socialContext,
            o = n && n.topicContext
          return o ? M.a.select(e, o.topicId) : void 0
        },
        Q = function (e, t) {
          var n = t.tweetId,
            o = n && R.a.select(e, n)
          return o ? Object(B.g)(e, o) : void 0
        },
        Y = function (e, t) {
          var n = R.a.createHydratedTweetSelector(q)(e, t),
            o = null == n ? void 0 : n.quoted_status
          return o ? Object(B.g)(e, o) : void 0
        },
        Z = function (e, t) {
          return t.urtPromotedContent
        },
        $ = function (e, t) {
          var n = t.urtPromotedContent
          return n ? L.e.select(e, n.advertiserId) : null
        },
        ee = function (e, t) {
          return t.contextTweetId
        },
        te = Object(N.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: V.c,
              articleDomains: j.b,
              community: Q,
              contextTweet: R.a.createHydratedTweetSelector(ee),
              displaySensitiveMedia: z.k,
              explicitSocialContext: X,
              isNsfwUser: z.t,
              isPinned: W,
              loggedInUser: L.e.selectLoggedInUser,
              quoteTweetCommunity: Y,
              topic: J,
              tweet: R.a.createHydratedTweetSelector(q),
              urtAdvertiser: $,
              urtPromotedContent: Z,
              userCountry: A.z,
              userLanguage: A.p,
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
              p = e.quoteTweetCommunity,
              m = e.topic,
              v = e.tweet,
              _ = e.urtAdvertiser,
              f = e.urtPromotedContent,
              w = e.userCountry,
              b = e.userLanguage,
              C = v && Object(K.f)(v, null == h ? void 0 : h.id_str),
              y =
                null == v ||
                null === (t = v.card) ||
                void 0 === t ||
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (o = n.domain) ||
                void 0 === o
                  ? void 0
                  : o.string_value,
              g = Object(j.a)(r, y),
              k = null == v ? void 0 : v.quoted_status,
              I = k ? Object(K.f)(k, null == h ? void 0 : h.id_str, p) : void 0,
              T = I && Object(K.e)(I),
              E = Object(S.c)(null == a ? void 0 : a.role)
            return {
              adFreeArticleDomains: i,
              contextTweet: c,
              displaySensitiveMedia: l,
              isCardArticle: g,
              isNsfwUser: d,
              isPinned: u,
              loggedInUser: h,
              promotedContentAdvertiser: _ || void 0,
              quoteTweetSocialContextProps: T,
              socialContext: s || C,
              topic: m,
              tweet: G(v, { urtPromotedContent: f, urtAdvertiser: _ }),
              userCountry: w,
              userLanguage: b,
              withCommunityModerationAuthority: E,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: x.b,
              block: L.e.block,
              createLocalApiErrorHandler: Object(H.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CONTAINER_CONTEXT',
              ),
              log: P.a,
              fetchAdFreeToken: V.a,
              fetchCommunityIfNeeded: B.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: M.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: V.b,
              mute: O.a,
              onUnretweet: U.a,
              richScribeAction: D.richScribeAction,
              setArticlesVisited: j.e,
              undoTopicNotInterested: M.a.undoNotInterested,
              unblock: L.e.unblock,
              unmute: L.e.unmute,
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
        pe = n('xM7j'),
        me = n('BLtI'),
        ve = n('3zeG'),
        _e = n('IO7v'),
        fe = n('Irs7'),
        we = n('MWbm'),
        be = n('v6aA'),
        Ce = n('E0cF'),
        ye = n('OIC0'),
        ge = n('+pKb'),
        ke = n('/Ikv'),
        Ie = n('Z6aJ'),
        Te = n('lHOd'),
        Ee = n('7JQg'),
        Ae = n('cFuS'),
        xe = n('24HD'),
        Se = n('4hQ9'),
        Pe = n('fz3c'),
        Oe = n('gZV8'),
        De = (function (e) {
          _()(n, e)
          var t = w()(n)
          function n() {
            var e
            d()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              C()(m()(e), '_handlePlacementChange', function (t) {
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
              C()(m()(e), '_handleLayout', function (t) {
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
                  return I.a.createElement(
                    Oe.e,
                    { key: n, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange },
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(I.a.PureComponent),
        Fe = n('fs1G'),
        Me = n('oQhu'),
        Re = n('mN6z'),
        Ue = n('Cqiq'),
        Le = re.a.f277e949,
        je = re.a.e4c6c309,
        Be = (function (e) {
          _()(n, e)
          var t = w()(n)
          function n(e, o) {
            var i, r
            d()(this, n),
              (r = t.call(this, e, o)),
              C()(m()(r), '_shouldLogPromotedImpression', He.bind(null, r.context.featureSwitches)),
              C()(m()(r), '_isProbablyRemovedByAdBlocker', Ne.bind(null, r.context.featureSwitches)),
              C()(
                m()(r),
                '_isArticleNudgeEnabled',
                r.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              C()(
                m()(r),
                '_isCompatibilityScribeEnabled',
                r.context.featureSwitches.isTrue('responsive_web_extension_compatibility_scribe'),
              ),
              C()(m()(r), '_isCommunitiesEnabled', r.context.featureSwitches.isTrue('c9s_enabled')),
              C()(
                m()(r),
                '_hasClaimsForAdFreeArticles',
                null === (i = r.context.userClaims) || void 0 === i
                  ? void 0
                  : i.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              C()(m()(r), '_renderBlockOrUnblockConfirmationSheet', function () {
                var e = r.props.tweet.user
                return Object(xe.j)({
                  confirmation: Object(xe.h)(e),
                  onClose: r._handleBlockOrUnblockConfirmClose,
                  handleConfirm: r._handleBlockOrUnblockUserConfirm,
                })
              }),
              C()(m()(r), '_handleShowReportedTweet', function () {
                r.setState({ displayReported: !0, enableKeyboardShortcuts: !1 })
              }),
              C()(m()(r), '_handleUnretweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  o = e.tweet
                n(Ce.a.getOriginalTweet(o).id_str, { promotedContent: o.promoted_content }).catch(t(_e.a))
              }),
              C()(m()(r), '_getShortcutKeyHandlers', function () {
                var e = r._getMuteOrUnmuteAction(),
                  t = e.onClick,
                  n = e.shortcutKey,
                  o = r._getBlockOrUnblockAction().shortcutKey,
                  i = r.context.loggedInUserId === r.props.tweet.user.id_str
                return g()(g()({}, n && C()({}, n, t)), o && !i && C()({}, o, r._handleBlockOrUnblockConfirmOpen))
              }),
              C()(m()(r), '_handleBlockOrUnblockConfirmOpen', function () {
                r.setState({ showBlockOrUnblockConfirmation: !0 })
              }),
              C()(m()(r), '_handleBlockOrUnblockConfirmClose', function () {
                r.setState({ showBlockOrUnblockConfirmation: !1 })
              }),
              C()(m()(r), '_handleBlockOrUnblockUserConfirm', function () {
                var e = r._getBlockOrUnblockAction().onClick
                r._handleBlockOrUnblockConfirmClose(), e && e()
              }),
              C()(m()(r), '_getBaseTweetProps', function () {
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
                  p = e.shouldStoreTypeaheadItem,
                  m = e.socialContext,
                  v = e.topicFollowPrompt,
                  _ = e.tweet,
                  f = e.userCountry,
                  w = e.userLanguage,
                  b = e.withActionsDisabled,
                  C = e.withCommunityModerationAuthority,
                  y = e.withCurationMenu,
                  g = e.withHideReply,
                  k = e.withMuteConversation,
                  I = e.withUnhideReply,
                  T = e.withViewHiddenReplies,
                  E = Ce.a.getOriginalTweet(_),
                  A = r._getPromotedContent(),
                  x = h.items && h.items[0] && h.items[0].suggestion_details,
                  S = r._isSelected(),
                  P = E && E.card && !_.is_quote_status ? E.card.url : void 0,
                  O = r.context.loggedInUserId,
                  D = E.user.id_str === O,
                  F = !E.in_reply_to_status_id_str && D && !E.community_id_str,
                  M = r._renderConversationControlsTooltip()
                return {
                  excludeCardUrl: P,
                  inlineCalloutInfo: r._getInlineCalloutInfo(),
                  isFocal: i === _.id_str,
                  onAnalyticsClick: r._handleAnalyticsClick,
                  onAvatarClick: r._handleAvatarClick,
                  onBirdwatchNotesIconClick: r._handleBirdwatchNotesIconClick,
                  onBirdwatchNotesIconShown: r._handleBirdwatchNotesIconShown,
                  onBlur: r._handleBlur,
                  onCardLinkClick: r._handleCardLinkClick,
                  onClick: _.isPreview ? r._handlePreviewClick : r._handleTweetClick,
                  onEntityClick: r._handleEntityClick,
                  onFocus: r._handleFocus,
                  onLikeSuccess: r._handleLikeSuccess,
                  onMediaClick: _.isPreview ? r._handleEmbeddedMediaPreviewClick : r._handleEmbeddedMediaClick,
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
                  promotedContent: A,
                  renderCurationActionMenu:
                    y && !_.isPreview
                      ? r._getRenderCurationActionMenu(
                          a && a.displayType,
                          o,
                          b,
                          c,
                          l,
                          S,
                          r._handleCaretClick,
                          s,
                          A,
                          E,
                          g,
                          C,
                          k,
                          I,
                          F,
                          T,
                          n,
                          null == t ? void 0 : t.entityToken,
                          M,
                          f,
                          w,
                        )
                      : void 0,
                  saveAsRecentSearch: u,
                  shouldStoreTypeaheadItem: p,
                  to: {
                    state: {
                      focal: E.id_str,
                      socialContext: m,
                      contextualClientEventInfo: t,
                      contextTweetId: _.id_str,
                      promotedContent: A,
                      suggestionDetails: x,
                      topicFollowPrompt: v,
                    },
                    pathname: E.permalink,
                    query: d ? { cxt: d } : void 0,
                  },
                }
              }),
              C()(m()(r), '_getReaderModeTweetProps', function () {
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
                  onAnalyticsClick: Fe.a,
                  onAvatarClick: Fe.a,
                  onBlur: r._handleBlur,
                  onCardLinkClick: r._handleCardLinkClick,
                  onClick: l.isPreview ? r._handlePreviewClick : r._handleTweetClick,
                  onEntityClick: Fe.a,
                  onFocus: r._handleFocus,
                  onMediaClick: r._handleEmbeddedMediaClick,
                  onReplyContextClick: Fe.a,
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
              C()(m()(r), '_getInlineCalloutInfo', function () {
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
                  Object(Se.e)({
                    displaySensitiveMedia: t,
                    featureSwitches: s,
                    isNsfwUser: n,
                    loggedInUserId: d,
                    tweet: i,
                    userCountry: a,
                    userLanguage: c,
                  })
                )
                  return Object(Se.d)(i, o, s)
              }),
              C()(m()(r), '_getBlockOrUnblockAction', function () {
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
                return Object(E.a)(g()(g()({}, d), {}, { block: n, unblock: c, user: l, promotedContent: s }))
              }),
              C()(m()(r), '_getMuteOrUnmuteAction', function () {
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
                return Object(le.a)(g()(g()({}, s), {}, { mute: i, unmute: c, user: l, promotedContent: d }))
              }),
              C()(m()(r), '_renderConversationControlsTooltip', function () {
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
                m()(r),
                '_getRenderCurationActionMenu',
                Object(Me.a)(function (e, t, n, o, i, r, a, c, l, s, d, u, h, p, m, v, _, f, w, b, C) {
                  return function () {
                    return I.a.createElement(ve.a, {
                      behavioralEventEntityToken: f,
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
                      withChangeConversationControls: m,
                      withChangeConversationControlsTooltip: w,
                      withCommunityModerationAuthority: u,
                      withHideReply: d,
                      withMuteConversation: h,
                      withUnhideReply: p,
                      withViewHiddenReplies: v,
                    })
                  }
                }),
              ),
              C()(
                m()(r),
                '_getDefaultScribeData',
                Object(Me.a)(function (e, t, n, o, i, a) {
                  var c = (function (e) {
                    var t = e.clickTrackingEmbedDetails,
                      n = e.contextualScribeData,
                      o = e.isSelected,
                      i = e.overflow,
                      r = e.promotedContent,
                      a = e.scribeData,
                      c = e.tweet,
                      l = de.a.addTweetToItems(a ? a.items : [], c, r, o, i)
                    return g()(
                      g()(g()(g()({}, n || {}), a || {}), t && { click_tracking_embed_details: t }),
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
                    (r._cachedFinalScribeData && Object(Re.a)(c, r._cachedFinalScribeData)) ||
                      (r._cachedFinalScribeData = c),
                    r._cachedFinalScribeData
                  )
                }),
              ),
              C()(m()(r), '_scribeAction', function (e) {
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
                  p = c.scribeNamespace,
                  m = c.tweet,
                  v = null === (t = d.location.state) || void 0 === t ? void 0 : t.overflow,
                  _ = r._getPromotedContent(),
                  f = h
                if (i) {
                  var w = de.a.getUserItem(m.user, _),
                    b = f.items ? [].concat(l()(f.items), [w]) : [w]
                  f = g()(g()({}, f), {}, { items: b })
                }
                if (a) {
                  var C = { article_details: { is_ad_free: a } },
                    y = f.items ? [].concat(l()(f.items), [C]) : [C]
                  f = g()(g()({}, f), {}, { items: y })
                }
                var k = r._getDefaultScribeData(Ce.a.getOriginalTweet(m), _, f, v, s.contextualScribeData, o)
                u(g()(g()({}, p), e), g()(g()({}, k), n))
              }),
              C()(m()(r), '_handlePoliticalSponsorWebsiteClick', function () {
                r._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
              }),
              C()(m()(r), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
                return function () {
                  r._scribeAction({ component: e, element: 'learn_more', action: 'click' })
                }
              }),
              C()(m()(r), '_handlePromotedIndicatorClick', function () {
                r._handleAsyncPromotedEvent(Ae.b.FOOTER_PROFILE)
              }),
              C()(m()(r), '_handleFocus', function () {
                r.setState({ enableKeyboardShortcuts: !0 })
              }),
              C()(m()(r), '_handleBlur', function () {
                r.setState({ enableKeyboardShortcuts: !1 })
              }),
              C()(m()(r), '_getPromotedContent', function () {
                var e = r.props,
                  t = e.displayPromotedContent,
                  n = e.tweet
                return t ? n.promoted_content : void 0
              }),
              C()(m()(r), '_handleImpression', function (e) {
                r._shouldLogPromotedImpression(e) && r._handleAsyncPromotedEvent(Ae.b.IMPRESSION)
              }),
              C()(m()(r), '_handleFullyVisible', function (e) {
                r._shouldLogPromotedImpression(e) && r._handleAsyncPromotedEvent(Ae.b.DWELL)
              }),
              C()(m()(r), '_handleResize', function (e, t) {
                !r._isProbablyRemovedByAdBlocker(e) &&
                  r._isProbablyRemovedByAdBlocker(t) &&
                  (T.a.recordAdBlockerPresence(),
                  r._isCompatibilityScribeEnabled && r._scribeAction({ action: 'blocked_ad' }))
              }),
              C()(m()(r), '_handleInlineReplyClick', function (e) {
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
                      isSelfThreadReply: !!t && Object(Se.c)({ tweet: i, loggedInUserId: t }),
                      promotedContent: a,
                    },
                    pathname: '/compose/tweet',
                  })
              }),
              C()(m()(r), '_handleLikeSuccess', function () {
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
              C()(m()(r), '_handleReplyContextClick', function (e, t) {
                return r._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
              }),
              C()(m()(r), '_handleAsyncPromotedEvent', function (e, t) {
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
                    itemType: Ae.c.TWEET,
                    params: g()({ event: e, impression_id: s }, t),
                  }).catch(o())
                }
              }),
              C()(m()(r), '_handleModeratedIconClick', function () {
                return r._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
              }),
              C()(m()(r), '_handleModeratedIconShown', function () {
                return r._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
              }),
              C()(m()(r), '_handleBirdwatchNotesIconClick', function () {
                return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
              }),
              C()(m()(r), '_handleBirdwatchNotesIconShown', function () {
                return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
              }),
              C()(m()(r), '_handleAnalyticsClick', function () {
                r._scribeAction({ element: 'analytics', action: 'click' })
              }),
              C()(m()(r), '_handlePromoteButtonClick', function () {
                r._scribeAction({ element: 'promote', action: 'click' })
              }),
              C()(m()(r), '_handlePromoteAgainButtonClick', function () {
                r._scribeAction({ element: 'promote_again', action: 'click' })
              }),
              C()(m()(r), '_handleAvatarClick', function () {
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
              C()(m()(r), '_handleCaretClick', function () {
                return r._scribeAction({ element: 'caret', action: 'click' })
              }),
              C()(
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
              C()(m()(r), '_handlePreviewClick', function (e) {
                e.preventDefault()
              }),
              C()(m()(r), '_handleEmbeddedMediaPreviewClick', function (e) {
                null == e || e.preventDefault()
              }),
              C()(m()(r), '_handleEmbeddedMediaClick', function () {
                r._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                  r._handleAsyncPromotedEvent(Ae.b.EMBEDDED_MEDIA)
              }),
              C()(m()(r), '_handleQuoteTweetClick', function () {
                r._scribeAction({ element: 'tweet', action: 'click' }), r._handleAsyncPromotedEvent(Ae.b.VIEW_DETAILS)
              }),
              C()(m()(r), '_handleEntityClick', function (e, t, n) {
                var o = r.props,
                  i = o.adFreeArticleDomains,
                  c = o.createLocalApiErrorHandler,
                  l = o.fetchAdFreeToken,
                  s = o.tweet,
                  d = Ae.a[t],
                  u = ne.a[t],
                  h = r._getPromotedContent(),
                  p = de.a.getClickTrackingEmbedDetails(h, n)
                if (d) {
                  var m =
                    d === Ae.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                      ? { url: e.currentTarget.href }
                      : void 0
                  r._handleAsyncPromotedEvent(d, m)
                }
                if (t === ye.a.MEDIA) return r._handleTweetClick(e)
                t === ye.a.URL && p && r._scribeAction({ action: ge.b.CLICK_ID_EMBED }, {}, p)
                var v = !1
                if (r._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                  var _ = new URL(n.expandedUrl).hostname,
                    f = new oe.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: n.embeddedUrl,
                      linkDomain: _,
                      adFreeArticleDomains: i,
                      tweetAuthorUserId: s.user.id_str,
                    }),
                    w = a()(f, 2),
                    b = w[0],
                    C = w[1]
                  b && (C(e), (v = !0))
                }
                if (t === ye.a.MENTION) {
                  var y = null != n && n.text ? [{ item_type: he.a.ItemType.USER, name: n.text, id: n.id_str }] : void 0
                  return r._scribeAction({ action: u }, { targets: y }, void 0, void 0, v)
                }
                if (t === ye.a.HASHTAG) {
                  var g = null != n && n.text ? [{ name: n.text }] : void 0
                  return r._scribeAction({ action: u }, { targets: g }, void 0, void 0, v)
                }
                if (t === ye.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                  return r._scribeAction(
                    { element: 'interactive_text', action: u },
                    { interactive_text_details: { id: n.id } },
                    void 0,
                    void 0,
                    v,
                  )
                u && r._scribeAction({ action: u }, void 0, void 0, void 0, v)
              }),
              C()(m()(r), '_handleScreenNameClick', function () {
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
              C()(m()(r), '_handleSelfThreadClick', function () {
                return r._scribeAction({ element: 'self_thread', action: 'click' })
              }),
              C()(m()(r), '_handleSelfThreadImpression', function () {
                return r._scribeAction({ element: 'self_thread', action: 'impression' })
              }),
              C()(m()(r), '_handleTopicFetch', function () {
                var e,
                  t = r.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.fetchTopicIfNeeded,
                  i = t.socialContext,
                  a = i && (null === (e = i.topicContext) || void 0 === e ? void 0 : e.topicId)
                a && o(a).catch(n())
              }),
              C()(m()(r), '_handleCommunityFetch', function () {
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
              C()(m()(r), '_handleUndoTopicNotInterested', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.topic,
                  o = e.undoTopicNotInterested
                r._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && o(n.id).catch(t())
              }),
              C()(m()(r), '_handleCardLinkClick', function (e) {
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
                    p,
                    m = null == u || null === (h = u.card) || void 0 === h ? void 0 : h.url
                  if (m)
                    d(m),
                      i.scribe({
                        component: 'article_nudge',
                        element: 'read_article',
                        action: 'click',
                        data: {
                          items: [
                            {
                              token: null == u || null === (p = u.card) || void 0 === p ? void 0 : p.url,
                              in_reply_to_tweet_id: u.id_str,
                            },
                          ],
                        },
                      })
                }
                var v = null == u || null === (t = u.card) || void 0 === t ? void 0 : t.binding_values
                if (r._hasClaimsForAdFreeArticles && v) {
                  var _ = new oe.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: ke.a.getBindingValue(v, 'card_url'),
                      linkDomain: ke.a.getBindingValue(v, 'domain'),
                      adFreeArticleDomains: o,
                    }),
                    f = a()(_, 2),
                    w = f[0],
                    b = f[1]
                  w && b(e)
                }
              }),
              C()(m()(r), '_handleSaveAsRecentSearchUser', function () {
                var e = r.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  o = e.tweet.user
                t && n && n(he.a.ItemType.USER) && t({ user: { id: o.id_str, type: se.a.User } })
              }),
              C()(m()(r), '_isSelected', function () {
                var e = r.props,
                  t = e.conversationTreeMetadata,
                  n = e.tweet,
                  o = (t || {}).selectedTweet
                return o && n.id_str === o.selectedTweetId
              }),
              C()(m()(r), '_handleMediaHashtagHighlightClick', function () {
                r._handleAsyncPromotedEvent(Ae.b.HASHTAG_CLICK)
              }),
              (r.state = { displayReported: !1, enableKeyboardShortcuts: !1, showBlockOrUnblockConfirmation: !1 })
            var c = r._getPromotedContent()
            return (
              (r._shouldHidePromotedTweet =
                Ie.a.isPromoted(c) && T.a.shouldHidePromotedTweets(r.context.featureSwitches)),
              r
            )
          }
          return (
            h()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(Re.a)(this.props, e) || !Object(Re.a)(this.state, t)
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
                      ? I.a.createElement(pe.a, { conversationPosition: n, conversationTreeMetadata: o }, je)
                      : null
                  var a = r.user.id_str === e,
                    c = Object(Ue.b)(Ce.a.getOriginalTweet(r).withheld_scope),
                    l = a && !r.retweeted_status,
                    s = l && 'user' === Ce.a.getOriginalTweet(r).withheld_scope && !i,
                    d = Object(Pe.h)(r) && !this.state.displayReported
                  return I.a.createElement(
                    I.a.Fragment,
                    null,
                    c
                      ? I.a.createElement(
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
                    o = e.history,
                    i = e.tweet,
                    r = e.tweetId
                  if (
                    i &&
                    'focal_module' === (null == t ? void 0 : t.component) &&
                    o.location.pathname.indexOf('/intent/') > -1 &&
                    o.location.query.tweet_id === r
                  )
                    return I.a.createElement(ae.a, {
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
                  return I.a.createElement(Ue.a, {
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
                  return I.a.createElement(
                    pe.a,
                    {
                      actionText: Le,
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
                    p = t.hideTrustedFriendsEducationTextInReplies,
                    m = t.history,
                    v = t.hitHighlights,
                    _ = t.injectedFeedbackItem,
                    f = t.innerForwardPivotInfo,
                    w = t.isReaderMode,
                    b = t.isUnread,
                    C = t.linkify,
                    y = t.loggedInUser,
                    k = t.promotedContentAdvertiser,
                    T = t.quoteTweetSocialContextProps,
                    E = t.quotedTweetTombstoneInfo,
                    A = t.replyBadge,
                    x = t.replyContext,
                    S = t.scribeData,
                    P = t.scribeNamespace,
                    O = t.shouldSelfThreadIncludeAvatar,
                    D = t.socialContext,
                    F = t.topic,
                    M = t.topicFollowPrompt,
                    R = t.tweet,
                    U = t.withActions,
                    L = t.withActionsDisabled,
                    j = t.withBirdwatchPivots,
                    B = t.withCardLinks,
                    N = t.withInlineMedia,
                    H = t.withQuotedTweetLinks,
                    V = t.withRemoveFromBookmarks,
                    K = t.withSelfThread,
                    z = t.withSocialContext,
                    W = t.withUserPresence,
                    q = this.state.enableKeyboardShortcuts,
                    G = Ce.a.getOriginalTweet(R),
                    X = this._getPromotedContent(),
                    J = Object(Re.a)(this._cachedScribeNamespace, P)
                      ? this._cachedScribeNamespace
                      : (this._cachedScribeNamespace = P),
                    Q = null === (e = m.location.state) || void 0 === e ? void 0 : e.overflow,
                    Y = {
                      allowDownvote: n,
                      bookmarkFolderId: i,
                      contextTweet: r,
                      conversationPosition: a,
                      conversationTreeMetadata: c,
                      displayBlocked: l,
                      enableKeyboardShortcuts: q,
                      forwardPivotInfo: s,
                      hasModeratedReplies: d,
                      hideConversationControlsEducationText: u,
                      hideExclusivityInfoEducationTextInReplies: h,
                      hideTrustedFriendsEducationTextInReplies: p,
                      hitHighlights: v,
                      injectedFeedbackItem: _,
                      innerForwardPivotInfo: f,
                      linkify: C,
                      loggedInUser: y,
                      promotedContentAdvertiser: k,
                      quotedTweetTombstoneInfo: E,
                      quoteTweetSocialContextProps: T,
                      replyBadge: A,
                      replyContext: x,
                      shouldSelfThreadIncludeAvatar: O,
                      socialContext: D,
                      topic: F,
                      topicFollowPrompt: M,
                      tweet: R,
                      withActions: U,
                      withActionsDisabled: L,
                      withBirdwatchPivots: j,
                      withCardLinks: B,
                      withInlineMedia: N,
                      withQuotedTweetLinks: H,
                      withRemoveFromBookmarks: V,
                      withSelfThread: K,
                      withSocialContext: z,
                      withUnreadStyles: b,
                      withUserPresence: W,
                    },
                    Z = g()(g()({}, Y), w ? this._getReaderModeTweetProps() : this._getBaseTweetProps()),
                    $ = I.a.createElement(
                      Ee.c,
                      { data: this._getDefaultScribeData(G, X, S, Q, o.contextualScribeData, void 0), namespace: J },
                      I.a.createElement(
                        ce.a,
                        { enabled: !!q, handlers: this._getShortcutKeyHandlers() },
                        I.a.createElement(me.b, Z),
                      ),
                    )
                  return X
                    ? I.a.createElement(
                        De,
                        {
                          id: R.id_str,
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
        })(I.a.Component)
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
      var Ne = function (e, t) {
          return t.height <= e.getNumberValue('responsive_web_extension_compatibility_size_threshold', 50)
        },
        He = function (e, t) {
          return !(e.isTrue('responsive_web_extension_compatibility_impression_guard') && Ne(e, t.item))
        },
        Ve = function (e) {
          var t,
            n,
            o,
            r = I.a.useContext(Te.a)
          return (
            (t = e.tweetId),
            (n = e.tweet),
            (o = Object(fe.b)()),
            I.a.useEffect(
              function () {
                n || o.scribe({ action: 'hydration_failed', data: { tweet_id: t } })
              },
              [o, n, t],
            ),
            e.tweet ? I.a.createElement(Be, i()({}, e, { history: r, tweet: e.tweet })) : null
          )
        }
      Ve.defaultProps = Be.defaultProps
      var Ke = te(Ve)
      t.b = Object(Ee.a)({ component: 'tweet' })(Ke)
    },
  },
])
//# sourceMappingURL=WIPED
