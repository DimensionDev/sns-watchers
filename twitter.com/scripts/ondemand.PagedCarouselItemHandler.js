;(window.webpackJsonp = window.webpackJsonp || []).push([
  [214],
  {
    'X3+4': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      })
      var n = r('ERkP'),
        o = r('fs1G'),
        a = n.createContext({ handleNextSlide: o.a })
    },
    b5s6: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        c = r.n(a),
        s = r('ERkP'),
        i = r('v6aA'),
        l = r('XOJV'),
        u = r('eSoz'),
        d = r('rxPX'),
        p = r('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var r = t.tweetId,
            n = r && l.a.select(e, r)
          return n ? Object(u.f)(e, n) : void 0
        },
        m = Object(d.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: l.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.b.fetchOneIfNeeded,
            }
          }),
        w = r('YeIG'),
        h = r('uCxL'),
        C = r('x5Pi'),
        E = m(function (e) {
          var t = e.community,
            r = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            a = e.hydratedTweet,
            l =
              (e.tweetId,
              c()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = s.useContext(i.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            f = null == a ? void 0 : a.community_id_str
          s.useEffect(
            function () {
              f && Object(w.a)(t) && n(f).catch(r())
            },
            [t, f, r, n],
          )
          var b = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = a && Object(C.f)(a, p, t),
            E = m && Object(C.e)(m),
            y = d.isTrue('responsive_web_reactions_enabled')
          return s.createElement(
            h.a,
            o()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: b,
              socialContextProps: E,
              tweet: a,
              withReactions: y,
            }),
          )
        })
      t.a = E
    },
    kh1t: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ezF+'),
        o = r('ERkP'),
        a = (r('uFXj'), r('X3+4')),
        c = r('Irs7'),
        s = r('MWbm'),
        i = r('/yvb'),
        l = r('rHpw').a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginLeft: e.spaces.space16,
              marginRight: e.spaces.space16,
            },
            buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            leftControl: { marginLeft: e.spaces.space12, marginRight: e.spaces.space4 },
            rightControl: { marginRight: e.spaces.space12, marginLeft: e.spaces.space4 },
          }
        }),
        u = function (e) {
          var t = e.content,
            r = e.showLessOnClick,
            n = e.showLessText,
            u = e.showMoreOnClick,
            d = e.showMoreText,
            p = o.useRef(),
            f = Object(c.b)(),
            b = function (e) {
              return function (t) {
                var r
                f.scribeAction('show_more'), u(), null === (r = p.current) || void 0 === r || r.blur(), e(t)
              }
            },
            m = function (e) {
              return function (t) {
                var n, o
                f.scribeAction('show_less'),
                  r(),
                  null === (n = p.current) || void 0 === n || n.focus(),
                  null === (o = p.current) || void 0 === o || o.blur(),
                  e(t)
              }
            },
            w = function () {
              f.scribeAction('click')
            }
          return o.createElement(a.a.Consumer, null, function (e) {
            var r = e.handleNextSlide
            return o.createElement(
              s.a,
              { style: l.root },
              o.createElement(s.a, { onClick: w }, t),
              o.createElement(
                s.a,
                { style: l.buttonsContainer },
                o.createElement(
                  i.a,
                  { onPress: m(r), size: 'medium', style: [l.button, l.leftControl], type: 'primaryOutlined' },
                  n,
                ),
                o.createElement(
                  i.a,
                  { onPress: b(r), ref: p, size: 'medium', style: [l.button, l.rightControl], type: 'primaryFilled' },
                  d,
                ),
              ),
            )
          })
        },
        d = r('VPAj'),
        p = r('EIk2'),
        f = r('b5s6'),
        b = r('zh9S'),
        m = r('Rp9C'),
        w = r('pbku'),
        h = r('XOJV'),
        C = r('0KEI'),
        E = function (e, t) {
          var r = (t || {}).entry
          return r.content.content && r.content.content.pagedCarouselFeedbackItem
            ? r.content.content.pagedCarouselFeedbackItem.content.tweet.id
            : void 0
        },
        y = n.g({
          bindActions: function (e) {
            return {
              applyReactionInstructions: e.module.applyReactionInstructions,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'PAGED_CAROUSEL_FEEDBACK_ITEM',
              ),
              processCallback: p.a,
              scribe: b.c,
            }
          },
          selectData: function (e) {
            e.entry
            return { tweet: h.a.createHydratedTweetSelector(E) }
          },
          component: u,
          createProps: function (e) {
            var t = e.actions,
              r = t.applyReactionInstructions,
              n = t.createLocalApiErrorHandler,
              a = t.processCallback,
              c = (t.scribe, e.data.tweet),
              s = e.entry
            if (!s.content.content.pagedCarouselFeedbackItem || !c) return null
            var i = s.content.content.pagedCarouselFeedbackItem,
              l = i.showLessCallback,
              u = i.showLessText,
              d = i.showMoreCallback,
              p = i.showMoreText
            return {
              content: o.createElement(f.a, { shouldShowBorder: !1, tweetId: c.id_str }),
              showLessText: u,
              showLessOnClick: function () {
                a(l).catch(n())
              },
              showMoreText: p,
              showMoreOnClick: function () {
                a(d).catch(n()), r({ entry: s, triggerName: w.a.ON_SHOW_MORE })
              },
            }
          },
          getScribeDataItem: function (e) {
            return m.a.getPagedCarouselTweetURTEntryItem(e)
          },
          shouldDisplayBorder: Object(d.a)(!1),
          isFocusable: Object(d.a)(!0),
        })
      t.default = y
    },
    pbku: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('yH/f')
      var n = Object.freeze({ ON_LINGER: 'onLinger', ON_IS_RELEVANT: 'onIsRelevant', ON_SHOW_MORE: 'onShowMore' })
    },
  },
])
//# sourceMappingURL=WIPED
