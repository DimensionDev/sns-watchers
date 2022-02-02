;(window.webpackJsonp = window.webpackJsonp || []).push([
  [236],
  {
    '+92Z': function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('ho0z'), n('z84I'), n('1t7P'), n('jQ/y'), n('ezF+')),
        c = n('6rlp'),
        i = n('ERkP'),
        s = n.n(i),
        d = n('vjRr'),
        l = n('/Ikv'),
        u = n('VPAj'),
        p = n('0KEI'),
        m = n('RoyM'),
        f = n('aX4+'),
        b = n('caTy'),
        g = n('cFuS'),
        h = n('zh9S'),
        E = n('Rp9C'),
        y = (n('OZaJ'), n('VrFO')),
        v = n.n(y),
        I = n('Y9Ll'),
        T = n.n(I),
        w = n('5Yy7'),
        O = n.n(w),
        C = n('N+ot'),
        M = n.n(C),
        k = n('AuHH'),
        _ = n.n(k),
        A = (n('WNMA'), n('KqXw'), n('MvUL'), n('hBvt'), n('aTAq')),
        j = n('b5s6'),
        x = 'metadata',
        R = 'trend',
        P = n('MWbm'),
        D = n('hxu0'),
        F = n('PbQQ'),
        L = n('htQn'),
        S = n('pjBI'),
        H = n('t62R'),
        N = n('tg+X'),
        z = n('e5HP'),
        U = n('rHpw')
      function V(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = _()(e)
          if (t) {
            var a = _()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return M()(this, n)
        }
      }
      var B,
        W = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        X = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(W) ? 'rtl' : 'ltr'
        },
        Y = (function (e) {
          O()(n, e)
          var t = V(n)
          function n() {
            return v()(this, n), t.apply(this, arguments)
          }
          return (
            T()(n, [
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
                    d = t.link,
                    l = t.name,
                    u = t.onClick,
                    p = t.rank,
                    m = t.trendFeedbackMenu,
                    f = X(l),
                    b = d && ('string' == typeof d ? { pathname: d } : d),
                    g = n && n.length ? n[0] : void 0
                  return s.a.createElement(F.a.Consumer, null, function (t) {
                    return s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement(
                        L.a,
                        {
                          link: b ? t.withAnchorless(b) : void 0,
                          onPress: u,
                          style: J.rootLink,
                          testID: R,
                          withDarkerInteractiveBackground: i,
                        },
                        s.a.createElement(
                          P.a,
                          { style: J.content },
                          s.a.createElement(
                            S.a,
                            null,
                            p
                              ? s.a.createElement(
                                  H.b,
                                  { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' },
                                  p,
                                )
                              : null,
                            s.a.createElement(H.b, { color: 'gray700', size: 'subtext2' }, o || null),
                          ),
                          s.a.createElement(H.b, { dir: f, style: J.name, weight: 'bold', withHashflags: !0 }, l),
                          a ? s.a.createElement(H.b, { color: 'gray700', style: J.description }, a) : null,
                          g ? s.a.createElement(j.a, { isCondensed: !0, style: J.withMarginTop, tweetId: g }) : null,
                          r ? s.a.createElement(P.a, { style: J.attachment }, r) : null,
                          s.a.createElement(N.a, { groupedTrends: c }),
                          e._renderMetadata(),
                          s.a.createElement(P.a, { style: J.trendFeedbackMenuContainer }, m),
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
                  r ? (e = s.a.createElement(z.a, { label: n, promotedContent: r })) : n && (e = n)
                  var a = Object(A.a)(e) && e.length ? X(e, e.length - 1) : void 0
                  return e
                    ? s.a.createElement(
                        H.b,
                        { color: 'gray700', dir: a, size: 'subtext2', style: J.withMarginTop, testID: x },
                        e,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        G = Object(D.a)(Y),
        J = U.a.create(function (e) {
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
        })
      function K(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var q = l.a.CardNames,
        Z = function (e) {
          return e && e.promotedTrendId
            ? { disclosure_type: e.disclosureType, impression_id: e.promotedTrendId }
            : void 0
        },
        $ = Object.freeze(
          ((B = {}),
          a()(B, q.LIVE_EVENT, !0),
          a()(B, q.MOMENT, !0),
          a()(B, q.SUMMARY, !0),
          a()(B, q.SUMMARY_LARGE_IMAGE, !0),
          a()(B, q.AUDIOSPACE, !0),
          B),
        ),
        ee = function (e, t) {
          if (e && e.length > 0) {
            var n = e[0]
            if (!t && n.name !== q.LIVE_EVENT && n.name !== q.AUDIOSPACE) return
            var r = n.name === q.SUMMARY_LARGE_IMAGE ? q.SUMMARY : n.name
            if (!$[r]) return
            return s.a.createElement(f.a, {
              card: { url: n.url, name: r, binding_values: n.binding_values, users: n.users },
              cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
              cardState: 'secondary',
            })
          }
        },
        te = function (e) {
          var t = e.entry
          return { cards: d.a.createManyHydratedSelector(t.content.associatedCardUrls || []) }
        }
      t.default = function (e) {
        var t = e.errorContext,
          n = e.withThirdPartyCards
        return o.g({
          isFocusable: Object(u.a)(!0),
          component: G,
          bindActions: function (e) {
            e.module
            return {
              logTrend: c.c,
              scribe: h.c,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(t),
            }
          },
          selectData: te,
          createProps: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              a = t.logTrend,
              o = t.scribe,
              c = e.data.cards,
              i = e.entry,
              d = e.feedbackItems,
              l = (e.module.selectFeedbackActions, e.scribeData),
              u = e.scribeNamespace,
              p = i.content,
              f = p.promotedMetadata,
              h = p.groupedTrends
                ? p.groupedTrends.map(function (e) {
                    return { name: e.name, link: Object(b.b)(e.url) }
                  })
                : []
            return {
              associatedTweetIds: p.associatedTweetIds,
              attachment: ee(c, n),
              description: p.description,
              domainContext: p.trendMetadata.domainContext,
              groupedTrends: h,
              link: Object(b.b)(p.url),
              metaDescription: p.trendMetadata && p.trendMetadata.metaDescription,
              name: p.name,
              onClick: function () {
                o(Q(Q({}, u), {}, { action: 'search' }), l),
                  f &&
                    f.promotedTrendId &&
                    a({
                      promoted_trend_id: f.promotedTrendId,
                      impression_id: f.impressionString,
                      event: g.d.TREND_CLICK,
                    }).catch(r())
              },
              promotedContent: Z(f),
              rank: p.rank,
              trendFeedbackMenu: s.a.createElement(m.a, { feedbackItems: d }),
            }
          },
          getScribeDataItem: function (e) {
            var t = e.content,
              n = t.name,
              r = t.promotedMetadata,
              a = e.itemMetadata.clientEventInfo
            return E.a.getTrendItem(n, r, a)
          },
          onImpression: function (e) {
            var t = e.actions,
              n = t.createLocalApiErrorHandler,
              r = t.logTrend,
              a = t.scribe,
              o = e.entry,
              c = e.scribeData,
              i = e.scribeNamespace,
              s = o.content.promotedMetadata
            a(Q(Q({}, i), {}, { action: 'impression' }), c),
              s &&
                s.promotedTrendId &&
                r({
                  promoted_trend_id: s.promotedTrendId,
                  impression_id: s.impressionString,
                  event: g.d.TREND_VIEW,
                }).catch(n())
          },
        })
      }
    },
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        c = Object(o.a)({
          loader: function () {
            return n.e(170).then(n.bind(null, 'ACNv'))
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
        p = n('rxPX'),
        m = n('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var n = t.tweetId,
            r = n && l.a.select(e, n)
          return r ? Object(u.g)(e, r) : void 0
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: l.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        E = n('uCxL'),
        y = n('x5Pi'),
        v = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            i =
              (e.tweetId,
              c()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            l = s.a.useContext(d.a),
            u = l.featureSwitches,
            p = l.loggedInUserId,
            m = null == o ? void 0 : o.community_id_str
          s.a.useEffect(
            function () {
              m && Object(h.a)(t) && r(m).catch(n())
            },
            [t, m, n, r],
          )
          var f = u.isTrue('responsive_web_alt_text_badge_enabled'),
            b = o && Object(y.f)(o, p, t),
            g = b && Object(y.e)(b),
            v = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            E.a,
            a()({}, i, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: g,
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
          return e.length >= 2 ? p(e, t) : 1 === e.length ? u(e[0], t) : null
        },
        u = function (e, t) {
          return a.a.createElement(i.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, m(e, t, !0))
        },
        p = function (e, t) {
          return a.a.createElement(i.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, m(e[0], t, !0), m(e[1], t))
        },
        m = function (e, t) {
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
