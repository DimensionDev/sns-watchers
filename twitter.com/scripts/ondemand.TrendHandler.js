;(window.webpackJsonp = window.webpackJsonp || []).push([
  [246],
  {
    '+92Z': function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = n('yiKp'),
        o = n.n(a),
        c = (n('ho0z'), n('ezF+')),
        i = n('VPAj'),
        s = n('Rp9C'),
        l = n('97Jx'),
        u = n.n(l),
        d = (n('1t7P'), n('jQ/y'), n('z84I'), n('ERkP')),
        m = n.n(d),
        p = n('vjRr'),
        f = n('o52z'),
        b = n('6rlp'),
        E = n('rxPX'),
        g = n('0KEI'),
        h = function (e, t) {
          return t.entry.content.associatedCardUrls || Object(f.a)()
        },
        I = Object(E.a)()
          .propsFromState(function () {
            return { cards: p.a.createManyHydratedSelector(h) }
          })
          .propsFromActions(function (e) {
            var t = e.errorContext
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(t),
              logTrend: b.c,
            }
          }),
        v = n('RoyM'),
        y = n('caTy'),
        T = n('cFuS'),
        w = n('b5s6'),
        C = n('vqbU'),
        k = 'trend',
        M = n('KEM+'),
        A = n.n(M),
        _ = (n('yH/f'), n('/Ikv')),
        x = n('aX4+'),
        O = _.a.CardNames,
        j = Object.freeze(
          ((r = {}),
          A()(r, O.LIVE_EVENT, !0),
          A()(r, O.MOMENT, !0),
          A()(r, O.SUMMARY, !0),
          A()(r, O.SUMMARY_LARGE_IMAGE, !0),
          A()(r, O.AUDIOSPACE, !0),
          r),
        ),
        D = function (e) {
          var t = e.card
          if (!e.withThirdPartyCards && t.name !== O.LIVE_EVENT && t.name !== O.AUDIOSPACE) return null
          var n = t.name === O.SUMMARY_LARGE_IMAGE ? O.SUMMARY : t.name
          return j[n]
            ? m.a.createElement(x.a, {
                card: { url: t.url, name: n, binding_values: t.binding_values, users: t.users },
                cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
                cardState: 'secondary',
              })
            : null
        },
        R = m.a.memo(D),
        L = n('kSj6'),
        P = n('Irs7'),
        S = function (e) {
          var t = e.cards,
            n = e.createLocalApiErrorHandler,
            r = e.entry.content,
            a = e.feedbackItems,
            o = e.logTrend,
            c = e.withThirdPartyCards,
            i = Object(P.b)(),
            s = m.a.useContext(C.a),
            l = r.associatedTweetIds,
            d = r.description,
            p = r.groupedTrends,
            f = r.name,
            b = r.promotedMetadata,
            E = r.rank,
            g = r.url,
            h = r.trendMetadata,
            I = h.domainContext,
            M = h.metaDescription,
            A = m.a.useCallback(
              function (e) {
                null != b &&
                  b.promotedTrendId &&
                  o({ promoted_trend_id: b.promotedTrendId, impression_id: b.impressionString, event: e }).catch(n())
              },
              [n, o, b],
            )
          m.a.useEffect(function () {
            i.scribeAction('impression'), A(T.d.TREND_VIEW)
          }, [])
          var _ = m.a.useCallback(
              function () {
                i.scribeAction('search'), A(T.d.TREND_CLICK)
              },
              [i, A],
            ),
            x = m.a.useMemo(
              function () {
                return null != t && t.length ? m.a.createElement(R, { card: t[0], withThirdPartyCards: c }) : void 0
              },
              [t, c],
            ),
            O = m.a.useMemo(
              function () {
                return p
                  ? p.map(function (e) {
                      return { name: e.name, link: Object(y.b)(e.url) }
                    })
                  : []
              },
              [p],
            ),
            j = m.a.useMemo(
              function () {
                return g ? Object(y.b)(g) : void 0
              },
              [g],
            ),
            D = m.a.useMemo(
              function () {
                return null != b && b.promotedTrendId
                  ? { disclosure_type: b.disclosureType, impression_id: b.promotedTrendId }
                  : void 0
              },
              [b],
            ),
            S = m.a.useMemo(
              function () {
                return null != l && l.length
                  ? function (e) {
                      return m.a.createElement(w.a, u()({}, e, { tweetId: l[0] }))
                    }
                  : void 0
              },
              [l],
            ),
            H = m.a.useMemo(
              function () {
                return null != a && a.length ? m.a.createElement(v.a, { feedbackItems: a }) : void 0
              },
              [a],
            )
          return m.a.createElement(L.a, {
            attachment: x,
            description: d,
            domainContext: I,
            groupedTrends: O,
            link: j,
            metaDescription: D ? void 0 : M,
            name: f,
            onClick: _,
            promotedContent: D,
            promotedLabel: D ? M : void 0,
            rank: E,
            renderQuoteTweet: S,
            testID: k,
            trendFeedbackMenu: H,
            withDarkerInteractiveBackground: s,
          })
        },
        H = I(m.a.memo(S))
      t.default = function (e) {
        return c
          .b({
            isFocusable: Object(i.a)(!0),
            component: H,
            getScribeDataItem: function (e) {
              var t = e.content,
                n = t.name,
                r = t.promotedMetadata,
                a = e.itemMetadata.clientEventInfo
              return s.a.getTrendItem(n, r, a)
            },
          })
          .getHandler(function () {
            return o()({}, e)
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
            return n.e(174).then(n.bind(null, 'ACNv'))
          },
        }),
        i = n('4bW+'),
        s = n('IG7M'),
        l = n('rHpw'),
        u = n('Irs7'),
        d = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
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
            style: d.curationControl,
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
        l = n('v6aA'),
        u = n('XOJV'),
        d = n('eSoz'),
        m = n('rxPX'),
        p = n('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var n = t.tweetId,
            r = n && u.a.select(e, n)
          return r ? Object(d.g)(e, r) : void 0
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: u.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        h = n('uCxL'),
        I = n('x5Pi'),
        v = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        y = E(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            i = (e.tweetId, c()(e, v)),
            u = s.a.useContext(l.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          s.a.useEffect(
            function () {
              p && Object(g.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            b = o && Object(I.f)(o, m, t),
            E = b && Object(I.e)(b),
            y = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            h.a,
            a()({}, i, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: f,
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
        return g
      })
      n('KqXw'), n('WNMA'), n('MvUL'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        c = n('aTAq'),
        i = n('SEra'),
        s = n('htQn'),
        l = n('pjBI'),
        u = n('e5HP'),
        d = n('tg+X'),
        m = n('UMQL'),
        p = n.n(m),
        f = n('rHpw'),
        b = n('MWbm'),
        E = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(p.a) ? 'rtl' : 'ltr'
        }
      function g(e) {
        var t,
          n = e.attachment,
          r = e.description,
          m = e.domainContext,
          p = e.groupedTrends,
          f = void 0 === p ? [] : p,
          g = e.link,
          I = e.metaDescription,
          v = e.name,
          y = e.onClick,
          T = e.promotedContent,
          w = e.promotedLabel,
          C = e.rank,
          k = e.renderQuoteTweet,
          M = e.testID,
          A = e.trendFeedbackMenu,
          _ = e.withDarkerInteractiveBackground,
          x = a.a.useContext(i.default)
        return a.a.createElement(
          s.a,
          {
            link: g ? x.withAnchorless(g) : void 0,
            onPress: y,
            style: h.root,
            testID: M,
            withDarkerInteractiveBackground: _,
          },
          a.a.createElement(
            b.a,
            { style: h.content },
            a.a.createElement(
              l.a,
              null,
              C ? a.a.createElement(o.b, { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' }, C) : null,
              m ? a.a.createElement(o.b, { color: 'gray700', size: 'subtext2' }, m) : null,
            ),
            a.a.createElement(o.b, { dir: E(v), style: h.name, weight: 'bold', withHashflags: !0 }, v),
            r ? a.a.createElement(o.b, { color: 'gray700', style: h.description }, r) : null,
            k ? a.a.createElement(b.a, { style: h.quoteTweet }, k({ isCondensed: !0 })) : null,
            n ? a.a.createElement(b.a, { style: h.attachmentWrapper }, n) : null,
            f.length ? a.a.createElement(d.a, { groupedTrends: f }) : null,
            I
              ? a.a.createElement(
                  o.b,
                  {
                    color: 'gray700',
                    dir: ((t = I), Object(c.a)(t) && t.length ? E(t, t.length - 1) : void 0),
                    size: 'subtext2',
                    style: h.metaDescription,
                  },
                  I,
                )
              : null,
            T
              ? a.a.createElement(
                  o.b,
                  { color: 'gray700', size: 'subtext2', style: h.promotedIndicatorWrapper },
                  a.a.createElement(u.a, { label: w, promotedContent: T }),
                )
              : null,
            A ? a.a.createElement(b.a, { style: h.trendFeedbackMenuWrapper }, A) : null,
          ),
        )
      }
      var h = f.a.create(function (e) {
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
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('VPAj'),
        a = Object(r.a)([])
      Object(r.a)({})
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
        l = function (e) {
          var t = e.groupedTrends,
            n = e.linkColor,
            r = e.textColor,
            c = u(t, n)
          return c ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: f.root }, c) : null
        }
      l.defaultProps = { textColor: 'gray700' }
      var u = function (e, t) {
          return e.length >= 2 ? m(e, t) : 1 === e.length ? d(e[0], t) : null
        },
        d = function (e, t) {
          return a.a.createElement(i.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        m = function (e, t) {
          return a.a.createElement(i.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return a.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: n && f.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        f = s.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = l
    },
  },
])
//# sourceMappingURL=WIPED
