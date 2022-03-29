;(window.webpackJsonp = window.webpackJsonp || []).push([
  [247],
  {
    '+92Z': function (e, t, n) {
      'use strict'
      n.r(t)
      n('ho0z')
      var r,
        a = n('ezF+'),
        o = n('VPAj'),
        c = n('Rp9C'),
        i = n('97Jx'),
        s = n.n(i),
        l = (n('1t7P'), n('jQ/y'), n('z84I'), n('ERkP')),
        u = n.n(l),
        d = n('vjRr'),
        m = n('o52z'),
        p = n('6rlp'),
        f = n('rxPX'),
        b = n('0KEI'),
        E = function (e, t) {
          return t.entry.content.associatedCardUrls || Object(m.a)()
        },
        g = Object(f.a)()
          .propsFromState(function () {
            return { cards: d.a.createManyHydratedSelector(E) }
          })
          .propsFromActions(function (e) {
            var t = e.errorContext
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(t),
              logTrend: p.c,
            }
          }),
        h = n('RoyM'),
        I = n('caTy'),
        v = n('cFuS'),
        y = n('b5s6'),
        T = n('vqbU'),
        w = 'trend',
        C = n('KEM+'),
        k = n.n(C),
        M = (n('yH/f'), n('/Ikv')),
        A = n('aX4+'),
        _ = M.a.CardNames,
        x = Object.freeze(
          ((r = {}),
          k()(r, _.LIVE_EVENT, !0),
          k()(r, _.MOMENT, !0),
          k()(r, _.SUMMARY, !0),
          k()(r, _.SUMMARY_LARGE_IMAGE, !0),
          k()(r, _.AUDIOSPACE, !0),
          r),
        ),
        O = function (e) {
          var t = e.card
          if (!e.withThirdPartyCards && t.name !== _.LIVE_EVENT && t.name !== _.AUDIOSPACE) return null
          var n = t.name === _.SUMMARY_LARGE_IMAGE ? _.SUMMARY : t.name
          return x[n]
            ? u.a.createElement(A.a, {
                card: { url: t.url, name: n, binding_values: t.binding_values, users: t.users },
                cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
                cardState: 'secondary',
              })
            : null
        },
        j = u.a.memo(O),
        D = n('kSj6'),
        F = n('Irs7'),
        R = function (e) {
          var t = e.cards,
            n = e.createLocalApiErrorHandler,
            r = e.entry.content,
            a = e.feedbackItems,
            o = e.logTrend,
            c = e.withThirdPartyCards,
            i = Object(F.b)(),
            l = u.a.useContext(T.a),
            d = r.associatedTweetIds,
            m = r.description,
            p = r.groupedTrends,
            f = r.name,
            b = r.promotedMetadata,
            E = r.rank,
            g = r.url,
            C = r.trendMetadata,
            k = C.domainContext,
            M = C.metaDescription,
            A = u.a.useCallback(
              function (e) {
                null != b &&
                  b.promotedTrendId &&
                  o({ promoted_trend_id: b.promotedTrendId, impression_id: b.impressionString, event: e }).catch(n())
              },
              [n, o, b],
            )
          u.a.useEffect(function () {
            i.scribeAction('impression'), A(v.d.TREND_VIEW)
          }, [])
          var _ = u.a.useCallback(
              function () {
                i.scribeAction('search'), A(v.d.TREND_CLICK)
              },
              [i, A],
            ),
            x = u.a.useMemo(
              function () {
                return null != t && t.length ? u.a.createElement(j, { card: t[0], withThirdPartyCards: c }) : void 0
              },
              [t, c],
            ),
            O = u.a.useMemo(
              function () {
                return p
                  ? p.map(function (e) {
                      return { name: e.name, link: Object(I.b)(e.url) }
                    })
                  : []
              },
              [p],
            ),
            R = u.a.useMemo(
              function () {
                return g ? Object(I.b)(g) : void 0
              },
              [g],
            ),
            P = u.a.useMemo(
              function () {
                return null != b && b.promotedTrendId
                  ? { disclosure_type: b.disclosureType, impression_id: b.promotedTrendId }
                  : void 0
              },
              [b],
            ),
            S = u.a.useMemo(
              function () {
                return null != d && d.length
                  ? function (e) {
                      return u.a.createElement(y.a, s()({}, e, { tweetId: d[0] }))
                    }
                  : void 0
              },
              [d],
            ),
            L = u.a.useMemo(
              function () {
                return null != a && a.length ? u.a.createElement(h.a, { feedbackItems: a }) : void 0
              },
              [a],
            )
          return u.a.createElement(D.a, {
            attachment: x,
            description: m,
            domainContext: k,
            groupedTrends: O,
            link: R,
            metaDescription: P ? void 0 : M,
            name: f,
            onClick: _,
            promotedContent: P,
            promotedLabel: P ? M : void 0,
            rank: E,
            renderQuoteTweet: S,
            testID: w,
            trendFeedbackMenu: L,
            withDarkerInteractiveBackground: l,
          })
        },
        P = g(u.a.memo(R))
      t.default = function (e) {
        return a
          .b({
            isFocusable: Object(o.a)(!0),
            component: P,
            getScribeDataItem: function (e) {
              var t = e.content,
                n = t.name,
                r = t.promotedMetadata,
                a = e.itemMetadata.clientEventInfo
              return c.a.getTrendItem(n, r, a)
            },
          })
          .getHandler(function () {
            return e
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
        return E
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
        m = n('rHpw'),
        p = n('MWbm'),
        f = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        b = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(f) ? 'rtl' : 'ltr'
        }
      function E(e) {
        var t,
          n = e.attachment,
          r = e.description,
          m = e.domainContext,
          f = e.groupedTrends,
          E = void 0 === f ? [] : f,
          h = e.link,
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
            link: h ? x.withAnchorless(h) : void 0,
            onPress: y,
            style: g.root,
            testID: M,
            withDarkerInteractiveBackground: _,
          },
          a.a.createElement(
            p.a,
            { style: g.content },
            a.a.createElement(
              l.a,
              null,
              C ? a.a.createElement(o.b, { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' }, C) : null,
              m ? a.a.createElement(o.b, { color: 'gray700', size: 'subtext2' }, m) : null,
            ),
            a.a.createElement(o.b, { dir: b(v), style: g.name, weight: 'bold', withHashflags: !0 }, v),
            r ? a.a.createElement(o.b, { color: 'gray700', style: g.description }, r) : null,
            k ? a.a.createElement(p.a, { style: g.quoteTweet }, k({ isCondensed: !0 })) : null,
            n ? a.a.createElement(p.a, { style: g.attachmentWrapper }, n) : null,
            E.length ? a.a.createElement(d.a, { groupedTrends: E }) : null,
            I
              ? a.a.createElement(
                  o.b,
                  {
                    color: 'gray700',
                    dir: ((t = I), Object(c.a)(t) && t.length ? b(t, t.length - 1) : void 0),
                    size: 'subtext2',
                    style: g.metaDescription,
                  },
                  I,
                )
              : null,
            T
              ? a.a.createElement(
                  o.b,
                  { color: 'gray700', size: 'subtext2', style: g.promotedIndicatorWrapper },
                  a.a.createElement(u.a, { label: w, promotedContent: T }),
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
