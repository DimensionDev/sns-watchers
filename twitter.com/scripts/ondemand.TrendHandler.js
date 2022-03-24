;(window.webpackJsonp = window.webpackJsonp || []).push([
  [247],
  {
    '+92Z': function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = n('yiKp'),
        o = n.n(a),
        c = n('KEM+'),
        i = n.n(c),
        s = (n('yH/f'), n('ho0z'), n('z84I'), n('1t7P'), n('jQ/y'), n('ezF+')),
        d = n('6rlp'),
        l = n('ERkP'),
        u = n.n(l),
        m = n('vjRr'),
        p = n('/Ikv'),
        b = n('VPAj'),
        f = n('0KEI'),
        E = n('RoyM'),
        g = n('aX4+'),
        I = n('caTy'),
        h = n('cFuS'),
        T = n('zh9S'),
        y = n('Rp9C'),
        v = n('97Jx'),
        w = n.n(v),
        k = n('m3Bd'),
        C = n.n(k),
        M = n('kSj6'),
        A = n('b5s6'),
        _ = 'trend',
        D = n('hxu0'),
        x = ['associatedTweetIds', 'isInSidebar', 'metaDescription'],
        S = Object(D.a)(function (e) {
          var t = e.associatedTweetIds,
            n = e.isInSidebar,
            r = e.metaDescription,
            a = C()(e, x)
          return u.a.createElement(
            M.a,
            w()({}, a, {
              metaDescription: a.promotedContent ? void 0 : r,
              promotedLabel: a.promotedContent ? r : void 0,
              renderQuoteTweet:
                null != t && t.length
                  ? function (e) {
                      return u.a.createElement(A.a, w()({}, e, { tweetId: t[0] }))
                    }
                  : void 0,
              testID: _,
              withDarkerInteractiveBackground: n,
            }),
          )
        }),
        O = p.a.CardNames,
        R = function (e) {
          return e && e.promotedTrendId
            ? { disclosure_type: e.disclosureType, impression_id: e.promotedTrendId }
            : void 0
        },
        F = Object.freeze(
          ((r = {}),
          i()(r, O.LIVE_EVENT, !0),
          i()(r, O.MOMENT, !0),
          i()(r, O.SUMMARY, !0),
          i()(r, O.SUMMARY_LARGE_IMAGE, !0),
          i()(r, O.AUDIOSPACE, !0),
          r),
        ),
        L = function (e, t) {
          if (e && e.length > 0) {
            var n = e[0]
            if (!t && n.name !== O.LIVE_EVENT && n.name !== O.AUDIOSPACE) return
            var r = n.name === O.SUMMARY_LARGE_IMAGE ? O.SUMMARY : n.name
            if (!F[r]) return
            return u.a.createElement(g.a, {
              card: { url: n.url, name: r, binding_values: n.binding_values, users: n.users },
              cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
              cardState: 'secondary',
            })
          }
        },
        j = function (e) {
          var t = e.entry
          return { cards: m.a.createManyHydratedSelector(t.content.associatedCardUrls || []) }
        }
      t.default = function (e) {
        var t = e.errorContext,
          n = e.withThirdPartyCards
        return s.g({
          isFocusable: Object(b.a)(!0),
          component: S,
          bindActions: function (e) {
            e.module
            return {
              logTrend: d.c,
              scribe: T.c,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(t),
            }
          },
          selectData: j,
          createProps: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              a = t.logTrend,
              c = t.scribe,
              i = e.data.cards,
              s = e.entry,
              d = e.feedbackItems,
              l = (e.module.selectFeedbackActions, e.scribeData),
              m = e.scribeNamespace,
              p = s.content,
              b = p.promotedMetadata,
              f = p.groupedTrends
                ? p.groupedTrends.map(function (e) {
                    return { name: e.name, link: Object(I.b)(e.url) }
                  })
                : []
            return {
              associatedTweetIds: p.associatedTweetIds,
              attachment: L(i, n),
              description: p.description,
              domainContext: p.trendMetadata.domainContext,
              groupedTrends: f,
              link: Object(I.b)(p.url),
              metaDescription: p.trendMetadata && p.trendMetadata.metaDescription,
              name: p.name,
              onClick: function () {
                c(o()(o()({}, m), {}, { action: 'search' }), l),
                  b &&
                    b.promotedTrendId &&
                    a({
                      promoted_trend_id: b.promotedTrendId,
                      impression_id: b.impressionString,
                      event: h.d.TREND_CLICK,
                    }).catch(r())
              },
              promotedContent: R(b),
              rank: p.rank,
              trendFeedbackMenu: u.a.createElement(E.a, { feedbackItems: d }),
            }
          },
          getScribeDataItem: function (e) {
            var t = e.content,
              n = t.name,
              r = t.promotedMetadata,
              a = e.itemMetadata.clientEventInfo
            return y.a.getTrendItem(n, r, a)
          },
          onImpression: function (e) {
            var t = e.actions,
              n = t.createLocalApiErrorHandler,
              r = t.logTrend,
              a = t.scribe,
              c = e.entry,
              i = e.scribeData,
              s = e.scribeNamespace,
              d = c.content.promotedMetadata
            a(o()(o()({}, s), {}, { action: 'impression' }), i),
              d &&
                d.promotedTrendId &&
                r({
                  promoted_trend_id: d.promotedTrendId,
                  impression_id: d.impressionString,
                  event: h.d.TREND_VIEW,
                }).catch(n())
          },
        })
      }
    },
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        c = Object(o.a)({
          loader: function () {
            return n.e(175).then(n.bind(null, 'ACNv'))
          },
        }),
        i = n('4bW+'),
        s = n('IG7M'),
        d = n('rHpw'),
        l = n('Irs7'),
        u = d.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(l.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return a.a.createElement(s.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(c, { actionItems: n, onClose: e })
            },
            style: u.curationControl,
            testID: i.a.caret,
            withDarkBackground: r,
          })
        }
        return null
      })
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        s = n.n(i),
        d = n('v6aA'),
        l = n('XOJV'),
        u = n('eSoz'),
        m = n('rxPX'),
        p = n('0KEI'),
        b = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && l.a.select(e, n)
          return r ? Object(u.g)(e, r) : void 0
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: l.a.createHydratedTweetSelector(b) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        I = n('uCxL'),
        h = n('x5Pi'),
        T = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        y = E(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            i = (e.tweetId, c()(e, T)),
            l = s.a.useContext(d.a),
            u = l.featureSwitches,
            m = l.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          s.a.useEffect(
            function () {
              p && Object(g.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var b = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = o && Object(h.f)(o, m, t),
            E = f && Object(h.e)(f),
            y = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            I.a,
            a()({}, i, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: b,
              socialContextProps: E,
              tweet: o,
              withReactions: y,
            }),
          )
        })
      t.a = y
    },
    kSj6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      n('KqXw'), n('WNMA'), n('MvUL'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        c = n('aTAq'),
        i = n('SEra'),
        s = n('htQn'),
        d = n('pjBI'),
        l = n('e5HP'),
        u = n('tg+X'),
        m = n('rHpw'),
        p = n('MWbm'),
        b = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        f = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(b) ? 'rtl' : 'ltr'
        }
      function E(e) {
        var t,
          n = e.attachment,
          r = e.description,
          m = e.domainContext,
          b = e.groupedTrends,
          E = void 0 === b ? [] : b,
          I = e.link,
          h = e.metaDescription,
          T = e.name,
          y = e.onClick,
          v = e.promotedContent,
          w = e.promotedLabel,
          k = e.rank,
          C = e.renderQuoteTweet,
          M = e.testID,
          A = e.trendFeedbackMenu,
          _ = e.withDarkerInteractiveBackground,
          D = a.a.useContext(i.default)
        return a.a.createElement(
          s.a,
          {
            link: I ? D.withAnchorless(I) : void 0,
            onPress: y,
            style: g.root,
            testID: M,
            withDarkerInteractiveBackground: _,
          },
          a.a.createElement(
            p.a,
            { style: g.content },
            a.a.createElement(
              d.a,
              null,
              k ? a.a.createElement(o.b, { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' }, k) : null,
              m ? a.a.createElement(o.b, { color: 'gray700', size: 'subtext2' }, m) : null,
            ),
            a.a.createElement(o.b, { dir: f(T), style: g.name, weight: 'bold', withHashflags: !0 }, T),
            r ? a.a.createElement(o.b, { color: 'gray700', style: g.description }, r) : null,
            C ? a.a.createElement(p.a, { style: g.quoteTweet }, C({ isCondensed: !0 })) : null,
            n ? a.a.createElement(p.a, { style: g.attachmentWrapper }, n) : null,
            E.length ? a.a.createElement(u.a, { groupedTrends: E }) : null,
            h
              ? a.a.createElement(
                  o.b,
                  {
                    color: 'gray700',
                    dir: ((t = h), Object(c.a)(t) && t.length ? f(t, t.length - 1) : void 0),
                    size: 'subtext2',
                    style: g.metaDescription,
                  },
                  h,
                )
              : null,
            v
              ? a.a.createElement(
                  o.b,
                  { color: 'gray700', size: 'subtext2', style: g.promotedIndicatorWrapper },
                  a.a.createElement(l.a, { label: w, promotedContent: v }),
                )
              : null,
            A ? a.a.createElement(p.a, { style: g.trendFeedbackMenuWrapper }, A) : null,
          ),
        )
      }
      var g = m.a.create(function (e) {
        return {
          root: {
            display: 'flex',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          content: { flexGrow: 1, position: 'relative' },
          name: { marginTop: e.spaces.space2 },
          description: { marginTop: e.spaces.space2 },
          quoteTweet: { marginTop: e.spaces.space4 },
          attachmentWrapper: { alignSelf: 'stretch', marginBottom: e.spaces.space4, marginTop: e.spaces.space12 },
          metaDescription: { marginTop: e.spaces.space4 },
          promotedIndicatorWrapper: { marginTop: e.spaces.space4 },
          trendFeedbackMenuWrapper: { position: 'absolute', top: 1, right: 0 },
        }
      })
    },
    'tg+X': function (e, t, n) {
      'use strict'
      n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('rHpw'),
        d = function (e) {
          var t = e.groupedTrends,
            n = e.linkColor,
            r = e.textColor,
            c = l(t, n)
          return c ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: b.root }, c) : null
        }
      d.defaultProps = { textColor: 'gray700' }
      var l = function (e, t) {
          return e.length >= 2 ? m(e, t) : 1 === e.length ? u(e[0], t) : null
        },
        u = function (e, t) {
          return a.a.createElement(i.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        m = function (e, t) {
          return a.a.createElement(i.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return a.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: n && b.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        b = s.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = d
    },
  },
])
//# sourceMappingURL=WIPED
