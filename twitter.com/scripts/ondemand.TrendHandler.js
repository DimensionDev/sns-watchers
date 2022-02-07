;(window.webpackJsonp = window.webpackJsonp || []).push([
  [239],
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
        f = n('VPAj'),
        b = n('0KEI'),
        E = n('RoyM'),
        g = n('aX4+'),
        h = n('caTy'),
        I = n('cFuS'),
        y = n('zh9S'),
        v = n('Rp9C'),
        T = n('VrFO'),
        C = n.n(T),
        w = n('Y9Ll'),
        M = n.n(w),
        k = n('5Yy7'),
        _ = n.n(k),
        A = n('2VqO'),
        x = n.n(A),
        O = (n('KqXw'), n('WNMA'), n('MvUL'), n('hBvt'), n('aTAq')),
        F = n('b5s6'),
        L = 'metadata',
        R = 'trend',
        S = n('MWbm'),
        D = n('hxu0'),
        H = n('PbQQ'),
        N = n('htQn'),
        P = n('pjBI'),
        j = n('t62R'),
        z = n('tg+X'),
        U = n('e5HP'),
        V = n('rHpw'),
        W = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        Y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(W) ? 'rtl' : 'ltr'
        },
        B = (function (e) {
          _()(n, e)
          var t = x()(n)
          function n() {
            return C()(this, n), t.apply(this, arguments)
          }
          return (
            M()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.associatedTweetIds,
                    r = t.attachment,
                    a = t.description,
                    o = t.domainContext,
                    c = t.groupedTrends,
                    i = t.isInSidebar,
                    s = t.link,
                    d = t.name,
                    l = t.onClick,
                    m = t.rank,
                    p = t.trendFeedbackMenu,
                    f = Y(d),
                    b = s && ('string' == typeof s ? { pathname: s } : s),
                    E = n && n.length ? n[0] : void 0
                  return u.a.createElement(H.a.Consumer, null, function (t) {
                    return u.a.createElement(
                      u.a.Fragment,
                      null,
                      u.a.createElement(
                        N.a,
                        {
                          link: b ? t.withAnchorless(b) : void 0,
                          onPress: l,
                          style: K.rootLink,
                          testID: R,
                          withDarkerInteractiveBackground: i,
                        },
                        u.a.createElement(
                          S.a,
                          { style: K.content },
                          u.a.createElement(
                            P.a,
                            null,
                            m
                              ? u.a.createElement(
                                  j.b,
                                  { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' },
                                  m,
                                )
                              : null,
                            u.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, o || null),
                          ),
                          u.a.createElement(j.b, { dir: f, style: K.name, weight: 'bold', withHashflags: !0 }, d),
                          a ? u.a.createElement(j.b, { color: 'gray700', style: K.description }, a) : null,
                          E ? u.a.createElement(F.a, { isCondensed: !0, style: K.withMarginTop, tweetId: E }) : null,
                          r ? u.a.createElement(S.a, { style: K.attachment }, r) : null,
                          u.a.createElement(z.a, { groupedTrends: c }),
                          e._renderMetadata(),
                          u.a.createElement(S.a, { style: K.trendFeedbackMenuContainer }, p),
                        ),
                      ),
                    )
                  })
                },
              },
              {
                key: '_renderMetadata',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.metaDescription,
                    r = t.promotedContent
                  r ? (e = u.a.createElement(U.a, { label: n, promotedContent: r })) : n && (e = n)
                  var a = Object(O.a)(e) && e.length ? Y(e, e.length - 1) : void 0
                  return e
                    ? u.a.createElement(
                        j.b,
                        { color: 'gray700', dir: a, size: 'subtext2', style: K.withMarginTop, testID: L },
                        e,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(u.a.Component),
        G = Object(D.a)(B),
        K = V.a.create(function (e) {
          return {
            rootLink: {
              display: 'flex',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            trendFeedbackMenuContainer: { position: 'absolute', top: 1, right: 0 },
            attachment: { alignSelf: 'stretch', paddingBottom: e.spaces.space4, paddingTop: e.spaces.space12 },
            description: { paddingTop: e.spaces.space2 },
            content: { flexGrow: 1, position: 'relative' },
            name: { paddingTop: e.spaces.space2 },
            withMarginTop: { marginTop: e.spaces.space4 },
          }
        }),
        X = p.a.CardNames,
        J = function (e) {
          return e && e.promotedTrendId
            ? { disclosure_type: e.disclosureType, impression_id: e.promotedTrendId }
            : void 0
        },
        Q = Object.freeze(
          ((r = {}),
          i()(r, X.LIVE_EVENT, !0),
          i()(r, X.MOMENT, !0),
          i()(r, X.SUMMARY, !0),
          i()(r, X.SUMMARY_LARGE_IMAGE, !0),
          i()(r, X.AUDIOSPACE, !0),
          r),
        ),
        q = function (e, t) {
          if (e && e.length > 0) {
            var n = e[0]
            if (!t && n.name !== X.LIVE_EVENT && n.name !== X.AUDIOSPACE) return
            var r = n.name === X.SUMMARY_LARGE_IMAGE ? X.SUMMARY : n.name
            if (!Q[r]) return
            return u.a.createElement(g.a, {
              card: { url: n.url, name: r, binding_values: n.binding_values, users: n.users },
              cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
              cardState: 'secondary',
            })
          }
        },
        $ = function (e) {
          var t = e.entry
          return { cards: m.a.createManyHydratedSelector(t.content.associatedCardUrls || []) }
        }
      t.default = function (e) {
        var t = e.errorContext,
          n = e.withThirdPartyCards
        return s.g({
          isFocusable: Object(f.a)(!0),
          component: G,
          bindActions: function (e) {
            e.module
            return {
              logTrend: d.c,
              scribe: y.c,
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(t),
            }
          },
          selectData: $,
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
              f = p.promotedMetadata,
              b = p.groupedTrends
                ? p.groupedTrends.map(function (e) {
                    return { name: e.name, link: Object(h.b)(e.url) }
                  })
                : []
            return {
              associatedTweetIds: p.associatedTweetIds,
              attachment: q(i, n),
              description: p.description,
              domainContext: p.trendMetadata.domainContext,
              groupedTrends: b,
              link: Object(h.b)(p.url),
              metaDescription: p.trendMetadata && p.trendMetadata.metaDescription,
              name: p.name,
              onClick: function () {
                c(o()(o()({}, m), {}, { action: 'search' }), l),
                  f &&
                    f.promotedTrendId &&
                    a({
                      promoted_trend_id: f.promotedTrendId,
                      impression_id: f.impressionString,
                      event: I.d.TREND_CLICK,
                    }).catch(r())
              },
              promotedContent: J(f),
              rank: p.rank,
              trendFeedbackMenu: u.a.createElement(E.a, { feedbackItems: d }),
            }
          },
          getScribeDataItem: function (e) {
            var t = e.content,
              n = t.name,
              r = t.promotedMetadata,
              a = e.itemMetadata.clientEventInfo
            return v.a.getTrendItem(n, r, a)
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
                  event: I.d.TREND_VIEW,
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
            return n.e(171).then(n.bind(null, 'ACNv'))
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
        f = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var n = t.tweetId,
            r = n && l.a.select(e, n)
          return r ? Object(u.g)(e, r) : void 0
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: l.a.createHydratedTweetSelector(f) }
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
        h = n('uCxL'),
        I = n('x5Pi'),
        y = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        v = E(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            i = (e.tweetId, c()(e, y)),
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
          var f = u.isTrue('responsive_web_alt_text_badge_enabled'),
            b = o && Object(I.f)(o, m, t),
            E = b && Object(I.e)(b),
            v = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            h.a,
            a()({}, i, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: f,
              socialContextProps: E,
              tweet: o,
              withReactions: v,
            }),
          )
        })
      t.a = v
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(i.a.Consumer, null, function (n) {
            return c.a.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
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
          return c ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: f.root }, c) : null
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
            { color: t, link: e.link, size: 'subtext2', style: n && f.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        f = s.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = d
    },
  },
])
//# sourceMappingURL=WIPED
