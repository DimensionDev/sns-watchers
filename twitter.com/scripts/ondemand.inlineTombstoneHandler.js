;(window.webpackJsonp = window.webpackJsonp || []).push([
  [342],
  {
    'NO+D': function (e, t, o) {
      'use strict'
      o.r(t)
      var n = o('yiKp'),
        i = o.n(n),
        a = o('ezF+'),
        r = o('ERkP'),
        d = o.n(r),
        c = o('VPAj'),
        s = o('rcen'),
        l = o('ddV6'),
        v = o.n(l),
        w = o('xM7j'),
        u = o('xZXe'),
        f = o('P1oR'),
        T = o('kY28'),
        p = function (e) {
          var t = e.actionText,
            o = e.children,
            n = e.contextTweetId,
            i = e.conversationPosition,
            a = e.conversationTreeMetadata,
            r = e.ctaLink,
            c = e.ctaText,
            s = e.forwardPivotInfo,
            l = e.innerForwardPivotInfo,
            p = e.isFocalTweet,
            I = e.isReaderMode,
            P = e.lang,
            m = e.onTweetDismiss,
            x = e.quotedTweetTombstoneInfo,
            y = e.socialContext,
            b = e.tweetId,
            h = e.withHideReply,
            k = d.a.useState(!0),
            C = v()(k, 2),
            F = C[0],
            M = C[1]
          d.a.useEffect(
            function () {
              M(!0)
            },
            [b],
          )
          var R = d.a.useCallback(function () {
            M(!1)
          }, [])
          return F || !b
            ? d.a.createElement(w.a, {
                actionText: t,
                children: o,
                conversationPosition: i,
                conversationTreeMetadata: a,
                ctaLink: r,
                ctaText: c,
                lang: P,
                onClick: R,
              })
            : b
            ? p && !I
              ? d.a.createElement(f.b, {
                  contextTweetId: n,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: l,
                  onTweetDismiss: m,
                  quotedTweetTombstoneInfo: x,
                  socialContext: y,
                  tweetId: b,
                  withHideReply: h,
                })
              : d.a.createElement(u.b, {
                  conversationPosition: i,
                  conversationTreeMetadata: a,
                  displayBlocked: !0,
                  displayPromotedContent: !0,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: l,
                  isReaderMode: I,
                  onTweetDismiss: m,
                  quotedTweetTombstoneInfo: x,
                  replyContext: I ? T.a.ReplyContextTypes.None : void 0,
                  shouldSelfThreadIncludeAvatar: !0,
                  tweetId: b,
                  withActions: !0,
                  withHideReply: h,
                  withInlineMedia: !0,
                  withSocialContext: !0,
                })
            : null
        },
        I = d.a.memo(p),
        P =
          (Object(c.a)(!1),
          function (e) {
            var t = e.alignment,
              o = e.entities,
              n = e.rtl,
              i = e.text
            return d.a.createElement(s.a, { alignment: t, entities: o, rtl: n, text: i })
          })
      t.default = function (e) {
        var t = e.createAdditionalProps,
          o = void 0 === t ? Object(c.a)(null) : t
        e.shouldDisplayBorder
        return a.g({
          bindActions: function (e) {
            return { applyFeedbackAction: e.module.applyFeedbackAction }
          },
          component: I,
          createProps: function (e) {
            var t,
              n,
              a,
              r,
              d = e.actions,
              c = e.entry,
              s = c.content,
              l = c.conversationPosition,
              v = c.conversationTreeMetadata,
              w = s.tombstoneInfo || {},
              u = w.revealText,
              f = w.richRevealText,
              T = w.richText,
              p = w.text
            return i()(
              {
                actionText: f ? P(f) : u,
                children: T ? P(T) : p,
                conversationPosition: l,
                conversationTreeMetadata: v,
                forwardPivotInfo: null === (t = s.tweet) || void 0 === t ? void 0 : t.forwardPivot,
                innerForwardPivotInfo: null === (n = s.tweet) || void 0 === n ? void 0 : n.innerForwardPivot,
                quotedTweetTombstoneInfo: null === (a = s.tweet) || void 0 === a ? void 0 : a.innerTombstoneInfo,
                tweetId: null === (r = s.tweet) || void 0 === r ? void 0 : r.id,
              },
              o(c, d),
            )
          },
          shouldDisplayBorder: function (e) {
            var t = e.conversationPosition,
              o = e.treeDisplay
            return 'VerticalConversation' !== (null == o ? void 0 : o.displayType) && (!t || !!t.isEnd)
          },
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
