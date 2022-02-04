;(window.webpackJsonp = window.webpackJsonp || []).push([
  [222],
  {
    'X3+4': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return c
      })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('fs1G'),
        c = o.a.createContext({ handleNextSlide: a.a })
    },
    b5s6: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        c = r.n(a),
        s = r('ERkP'),
        i = r.n(s),
        l = r('v6aA'),
        u = r('XOJV'),
        d = r('eSoz'),
        p = r('rxPX'),
        b = r('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var r = t.tweetId,
            n = r && u.a.select(e, r)
          return n ? Object(d.g)(e, n) : void 0
        },
        w = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: u.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        h = r('YeIG'),
        C = r('uCxL'),
        y = r('x5Pi'),
        E = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        g = w(function (e) {
          var t = e.community,
            r = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            a = e.hydratedTweet,
            s = (e.tweetId, c()(e, E)),
            u = i.a.useContext(l.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            b = null == a ? void 0 : a.community_id_str
          i.a.useEffect(
            function () {
              b && Object(h.a)(t) && n(b).catch(r())
            },
            [t, b, r, n],
          )
          var m = d.isTrue('responsive_web_alt_text_badge_enabled'),
            f = a && Object(y.f)(a, p, t),
            w = f && Object(y.e)(f),
            g = d.isTrue('responsive_web_reactions_enabled')
          return i.a.createElement(
            C.a,
            o()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: m,
              socialContextProps: w,
              tweet: a,
              withReactions: g,
            }),
          )
        })
      t.a = g
    },
    kh1t: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ezF+'),
        o = r('ERkP'),
        a = r.n(o),
        c = (r('uFXj'), r('X3+4')),
        s = r('Irs7'),
        i = r('MWbm'),
        l = r('/yvb'),
        u = r('rHpw').a.create(function (e) {
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
        d = function (e) {
          var t = e.content,
            r = e.showLessOnClick,
            n = e.showLessText,
            o = e.showMoreOnClick,
            d = e.showMoreText,
            p = a.a.useRef(),
            b = Object(s.b)(),
            m = function (e) {
              return function (t) {
                var r
                b.scribeAction('show_more'), o(), null === (r = p.current) || void 0 === r || r.blur(), e(t)
              }
            },
            f = function (e) {
              return function (t) {
                var n, o
                b.scribeAction('show_less'),
                  r(),
                  null === (n = p.current) || void 0 === n || n.focus(),
                  null === (o = p.current) || void 0 === o || o.blur(),
                  e(t)
              }
            },
            w = function () {
              b.scribeAction('click')
            }
          return a.a.createElement(c.a.Consumer, null, function (e) {
            var r = e.handleNextSlide
            return a.a.createElement(
              i.a,
              { style: u.root },
              a.a.createElement(i.a, { onClick: w }, t),
              a.a.createElement(
                i.a,
                { style: u.buttonsContainer },
                a.a.createElement(
                  l.a,
                  { onPress: f(r), size: 'medium', style: [u.button, u.leftControl], type: 'primaryOutlined' },
                  n,
                ),
                a.a.createElement(
                  l.a,
                  { onPress: m(r), ref: p, size: 'medium', style: [u.button, u.rightControl], type: 'primaryFilled' },
                  d,
                ),
              ),
            )
          })
        },
        p = r('VPAj'),
        b = r('EIk2'),
        m = r('b5s6'),
        f = r('zh9S'),
        w = r('Rp9C'),
        h = r('pbku'),
        C = r('XOJV'),
        y = r('0KEI'),
        E = function (e, t) {
          var r = (t || {}).entry
          return r.content.content && r.content.content.pagedCarouselFeedbackItem
            ? r.content.content.pagedCarouselFeedbackItem.content.tweet.id
            : void 0
        },
        g = n.g({
          bindActions: function (e) {
            return {
              applyReactionInstructions: e.module.applyReactionInstructions,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'PAGED_CAROUSEL_FEEDBACK_ITEM',
              ),
              processCallback: b.a,
              scribe: f.c,
            }
          },
          selectData: function (e) {
            e.entry
            return { tweet: C.a.createHydratedTweetSelector(E) }
          },
          component: d,
          createProps: function (e) {
            var t = e.actions,
              r = t.applyReactionInstructions,
              n = t.createLocalApiErrorHandler,
              o = t.processCallback,
              c = (t.scribe, e.data.tweet),
              s = e.entry
            if (!s.content.content.pagedCarouselFeedbackItem || !c) return null
            var i = s.content.content.pagedCarouselFeedbackItem,
              l = i.showLessCallback,
              u = i.showLessText,
              d = i.showMoreCallback,
              p = i.showMoreText
            return {
              content: a.a.createElement(m.a, { shouldShowBorder: !1, tweetId: c.id_str }),
              showLessText: u,
              showLessOnClick: function () {
                o(l).catch(n())
              },
              showMoreText: p,
              showMoreOnClick: function () {
                o(d).catch(n()), r({ entry: s, triggerName: h.a.ON_SHOW_MORE })
              },
            }
          },
          getScribeDataItem: function (e) {
            return w.a.getPagedCarouselTweetURTEntryItem(e)
          },
          shouldDisplayBorder: Object(p.a)(!1),
          isFocusable: Object(p.a)(!0),
        })
      t.default = g
    },
  },
])
//# sourceMappingURL=WIPED
