;(window.webpackJsonp = window.webpackJsonp || []).push([
  [331],
  {
    'NO+D': function (e, t, o) {
      'use strict'
      o.r(t)
      o('+KXO'), o('1t7P'), o('LW0h'), o('daRM'), o('jwue'), o('+oxZ'), o('FtHn')
      var n = o('KEM+'),
        i = o.n(n),
        r = o('ezF+'),
        a = o('ERkP'),
        c = o('VPAj'),
        d = o('rcen'),
        s = o('ddV6'),
        l = o.n(s),
        u = o('xM7j'),
        v = o('xZXe'),
        w = o('P1oR'),
        f = o('kY28'),
        p = function (e) {
          var t = e.actionText,
            o = e.children,
            n = e.contextTweetId,
            i = e.conversationPosition,
            r = e.conversationTreeMetadata,
            c = e.ctaLink,
            d = e.ctaText,
            s = e.forwardPivotInfo,
            p = e.innerForwardPivotInfo,
            P = e.isFocalTweet,
            T = e.isReaderMode,
            b = e.lang,
            y = e.onTweetDismiss,
            m = e.quotedTweetTombstoneInfo,
            I = e.socialContext,
            h = e.tweetId,
            x = e.withHideReply,
            O = a.useState(!0),
            j = l()(O, 2),
            g = j[0],
            k = j[1]
          a.useEffect(
            function () {
              k(!0)
            },
            [h],
          )
          var D = a.useCallback(function () {
            k(!1)
          }, [])
          return g || !h
            ? a.createElement(u.a, {
                actionText: t,
                children: o,
                conversationPosition: i,
                conversationTreeMetadata: r,
                ctaLink: c,
                ctaText: d,
                lang: b,
                onClick: D,
              })
            : h
            ? P && !T
              ? a.createElement(w.b, {
                  contextTweetId: n,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: p,
                  onTweetDismiss: y,
                  quotedTweetTombstoneInfo: m,
                  socialContext: I,
                  tweetId: h,
                  withHideReply: x,
                })
              : a.createElement(v.b, {
                  conversationPosition: i,
                  conversationTreeMetadata: r,
                  displayBlocked: !0,
                  displayPromotedContent: !0,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: p,
                  isReaderMode: T,
                  onTweetDismiss: y,
                  quotedTweetTombstoneInfo: m,
                  replyContext: T ? f.a.ReplyContextTypes.None : void 0,
                  shouldSelfThreadIncludeAvatar: !0,
                  tweetId: h,
                  withActions: !0,
                  withHideReply: x,
                  withInlineMedia: !0,
                  withSocialContext: !0,
                })
            : null
        },
        P = a.memo(p)
      function T(e, t) {
        var o = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            o.push.apply(o, n)
        }
        return o
      }
      Object(c.a)(!1)
      var b = function (e) {
        var t = e.alignment,
          o = e.entities,
          n = e.rtl,
          i = e.text
        return a.createElement(d.a, { alignment: t, entities: o, rtl: n, text: i })
      }
      t.default = function (e) {
        var t = e.createAdditionalProps,
          o = void 0 === t ? Object(c.a)(null) : t
        e.shouldDisplayBorder
        return r.g({
          bindActions: function (e) {
            return { applyFeedbackAction: e.module.applyFeedbackAction }
          },
          component: P,
          createProps: function (e) {
            var t,
              n,
              r,
              a,
              c = e.actions,
              d = e.entry,
              s = d.content,
              l = d.conversationPosition,
              u = d.conversationTreeMetadata,
              v = s.tombstoneInfo || {},
              w = v.revealText,
              f = v.richRevealText,
              p = v.richText,
              P = v.text
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? T(Object(o), !0).forEach(function (t) {
                      i()(e, t, o[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                  : T(Object(o)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
              }
              return e
            })(
              {
                actionText: f ? b(f) : w,
                children: p ? b(p) : P,
                conversationPosition: l,
                conversationTreeMetadata: u,
                forwardPivotInfo: null === (t = s.tweet) || void 0 === t ? void 0 : t.forwardPivot,
                innerForwardPivotInfo: null === (n = s.tweet) || void 0 === n ? void 0 : n.innerForwardPivot,
                quotedTweetTombstoneInfo: null === (r = s.tweet) || void 0 === r ? void 0 : r.innerTombstoneInfo,
                tweetId: null === (a = s.tweet) || void 0 === a ? void 0 : a.id,
              },
              o(d, c),
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
