;(window.webpackJsonp = window.webpackJsonp || []).push([
  [341],
  {
    'NO+D': function (e, t, o) {
      'use strict'
      o.r(t)
      o('+KXO'), o('1t7P'), o('LW0h'), o('daRM'), o('jwue'), o('+oxZ'), o('FtHn')
      var n = o('KEM+'),
        i = o.n(n),
        r = o('ezF+'),
        a = o('ERkP'),
        c = o.n(a),
        d = o('VPAj'),
        s = o('rcen'),
        l = o('ddV6'),
        u = o.n(l),
        v = o('xM7j'),
        w = o('xZXe'),
        f = o('P1oR'),
        p = o('kY28'),
        P = function (e) {
          var t = e.actionText,
            o = e.children,
            n = e.contextTweetId,
            i = e.conversationPosition,
            r = e.conversationTreeMetadata,
            a = e.ctaLink,
            d = e.ctaText,
            s = e.forwardPivotInfo,
            l = e.innerForwardPivotInfo,
            P = e.isFocalTweet,
            T = e.isReaderMode,
            b = e.lang,
            y = e.onTweetDismiss,
            m = e.quotedTweetTombstoneInfo,
            I = e.socialContext,
            h = e.tweetId,
            x = e.withHideReply,
            O = c.a.useState(!0),
            j = u()(O, 2),
            g = j[0],
            k = j[1]
          c.a.useEffect(
            function () {
              k(!0)
            },
            [h],
          )
          var D = c.a.useCallback(function () {
            k(!1)
          }, [])
          return g || !h
            ? c.a.createElement(v.a, {
                actionText: t,
                children: o,
                conversationPosition: i,
                conversationTreeMetadata: r,
                ctaLink: a,
                ctaText: d,
                lang: b,
                onClick: D,
              })
            : h
            ? P && !T
              ? c.a.createElement(f.b, {
                  contextTweetId: n,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: l,
                  onTweetDismiss: y,
                  quotedTweetTombstoneInfo: m,
                  socialContext: I,
                  tweetId: h,
                  withHideReply: x,
                })
              : c.a.createElement(w.b, {
                  conversationPosition: i,
                  conversationTreeMetadata: r,
                  displayBlocked: !0,
                  displayPromotedContent: !0,
                  forwardPivotInfo: s,
                  innerForwardPivotInfo: l,
                  isReaderMode: T,
                  onTweetDismiss: y,
                  quotedTweetTombstoneInfo: m,
                  replyContext: T ? p.a.ReplyContextTypes.None : void 0,
                  shouldSelfThreadIncludeAvatar: !0,
                  tweetId: h,
                  withActions: !0,
                  withHideReply: x,
                  withInlineMedia: !0,
                  withSocialContext: !0,
                })
            : null
        },
        T = c.a.memo(P)
      function b(e, t) {
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
      Object(d.a)(!1)
      var y = function (e) {
        var t = e.alignment,
          o = e.entities,
          n = e.rtl,
          i = e.text
        return c.a.createElement(s.a, { alignment: t, entities: o, rtl: n, text: i })
      }
      t.default = function (e) {
        var t = e.createAdditionalProps,
          o = void 0 === t ? Object(d.a)(null) : t
        e.shouldDisplayBorder
        return r.g({
          bindActions: function (e) {
            return { applyFeedbackAction: e.module.applyFeedbackAction }
          },
          component: T,
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
                  ? b(Object(o), !0).forEach(function (t) {
                      i()(e, t, o[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                  : b(Object(o)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    })
              }
              return e
            })(
              {
                actionText: f ? y(f) : w,
                children: p ? y(p) : P,
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
