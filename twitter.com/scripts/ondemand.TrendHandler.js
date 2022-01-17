;(window.webpackJsonp = window.webpackJsonp || []).push([
  [231],
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
        s = n('vjRr'),
        d = n('/Ikv'),
        l = n('VPAj'),
        u = n('0KEI'),
        p = n('RoyM'),
        m = n('aX4+'),
        f = n('caTy'),
        b = n('cFuS'),
        h = n('zh9S'),
        g = n('Rp9C'),
        y = (n('OZaJ'), n('VrFO')),
        E = n.n(y),
        v = n('Y9Ll'),
        I = n.n(v),
        T = n('5Yy7'),
        w = n.n(T),
        O = n('N+ot'),
        C = n.n(O),
        M = n('AuHH'),
        k = n.n(M),
        A = (n('WNMA'), n('KqXw'), n('MvUL'), n('hBvt'), n('aTAq')),
        _ = n('b5s6'),
        j = n('i7AQ'),
        R = 'metadata',
        x = 'trend',
        P = n('MWbm'),
        D = n('hxu0'),
        F = n('PbQQ'),
        L = n('htQn'),
        S = n('pjBI'),
        H = n('t62R'),
        N = n('e5HP'),
        z = n('rHpw')
      function U(e) {
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
            r = k()(e)
          if (t) {
            var a = k()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return C()(this, n)
        }
      }
      var V,
        B = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        W = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(B) ? 'rtl' : 'ltr'
        },
        Y = (function (e) {
          w()(n, e)
          var t = U(n)
          function n() {
            return E()(this, n), t.apply(this, arguments)
          }
          return (
            I()(n, [
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
                    s = t.isInSidebar,
                    d = t.link,
                    l = t.name,
                    u = t.onClick,
                    p = t.rank,
                    m = t.trendFeedbackMenu,
                    f = W(l),
                    b = d && ('string' == typeof d ? { pathname: d } : d),
                    h = n && n.length ? n[0] : void 0
                  return i.createElement(F.a.Consumer, null, function (t) {
                    return i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        L.a,
                        {
                          link: b ? t.withAnchorless(b) : void 0,
                          onPress: u,
                          style: K.rootLink,
                          testID: x,
                          withDarkerInteractiveBackground: s,
                        },
                        i.createElement(
                          P.a,
                          { style: K.content },
                          i.createElement(
                            S.a,
                            null,
                            p
                              ? i.createElement(H.b, { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' }, p)
                              : null,
                            i.createElement(H.b, { color: 'gray700', size: 'subtext2' }, o || null),
                          ),
                          i.createElement(H.b, { dir: f, style: K.name, weight: 'bold', withHashflags: !0 }, l),
                          a ? i.createElement(H.b, { color: 'gray700', style: K.description }, a) : null,
                          h ? i.createElement(_.a, { isCondensed: !0, style: K.withMarginTop, tweetId: h }) : null,
                          r ? i.createElement(P.a, { style: K.attachment }, r) : null,
                          i.createElement(j.a, { groupedTrends: c }),
                          e._renderMetadata(),
                          i.createElement(P.a, { style: K.trendFeedbackMenuContainer }, m),
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
                  r ? (e = i.createElement(N.a, { label: n, promotedContent: r })) : n && (e = n)
                  var a = Object(A.a)(e) && e.length ? W(e, e.length - 1) : void 0
                  return e
                    ? i.createElement(
                        H.b,
                        { color: 'gray700', dir: a, size: 'subtext2', style: K.withMarginTop, testID: R },
                        e,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(i.Component),
        G = Object(D.a)(Y),
        K = z.a.create(function (e) {
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
      function Q(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var X = d.a.CardNames,
        Z = function (e) {
          return e && e.promotedTrendId
            ? { disclosure_type: e.disclosureType, impression_id: e.promotedTrendId }
            : void 0
        },
        q = Object.freeze(
          ((V = {}),
          a()(V, X.LIVE_EVENT, !0),
          a()(V, X.MOMENT, !0),
          a()(V, X.SUMMARY, !0),
          a()(V, X.SUMMARY_LARGE_IMAGE, !0),
          a()(V, X.AUDIOSPACE, !0),
          V),
        ),
        $ = function (e, t) {
          if (e && e.length > 0) {
            var n = e[0]
            if (!t && n.name !== X.LIVE_EVENT && n.name !== X.AUDIOSPACE) return
            var r = n.name === X.SUMMARY_LARGE_IMAGE ? X.SUMMARY : n.name
            if (!q[r]) return
            return i.createElement(m.a, {
              card: { url: n.url, name: r, binding_values: n.binding_values, users: n.users },
              cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
              cardState: 'secondary',
            })
          }
        },
        ee = function (e) {
          var t = e.entry
          return { cards: s.a.createManyHydratedSelector(t.content.associatedCardUrls || []) }
        }
      t.default = function (e) {
        var t = e.errorContext,
          n = e.withThirdPartyCards
        return o.g({
          isFocusable: Object(l.a)(!0),
          component: G,
          bindActions: function (e) {
            e.module
            return {
              logTrend: c.c,
              scribe: h.c,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(t),
            }
          },
          selectData: ee,
          createProps: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              a = t.logTrend,
              o = t.scribe,
              c = e.data.cards,
              s = e.entry,
              d = e.feedbackItems,
              l = (e.module.selectFeedbackActions, e.scribeData),
              u = e.scribeNamespace,
              m = s.content,
              h = m.promotedMetadata,
              g = m.groupedTrends
                ? m.groupedTrends.map(function (e) {
                    return { name: e.name, link: Object(f.b)(e.url) }
                  })
                : []
            return {
              associatedTweetIds: m.associatedTweetIds,
              attachment: $(c, n),
              description: m.description,
              domainContext: m.trendMetadata.domainContext,
              groupedTrends: g,
              link: Object(f.b)(m.url),
              metaDescription: m.trendMetadata && m.trendMetadata.metaDescription,
              name: m.name,
              onClick: function () {
                o(J(J({}, u), {}, { action: 'search' }), l),
                  h &&
                    h.promotedTrendId &&
                    a({
                      promoted_trend_id: h.promotedTrendId,
                      impression_id: h.impressionString,
                      event: b.d.TREND_CLICK,
                    }).catch(r())
              },
              promotedContent: Z(h),
              rank: m.rank,
              trendFeedbackMenu: i.createElement(p.a, { feedbackItems: d }),
            }
          },
          getScribeDataItem: function (e) {
            var t = e.content,
              n = t.name,
              r = t.promotedMetadata,
              a = e.itemMetadata.clientEventInfo
            return g.a.getTrendItem(n, r, a)
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
            a(J(J({}, i), {}, { action: 'impression' }), c),
              s &&
                s.promotedTrendId &&
                r({
                  promoted_trend_id: s.promotedTrendId,
                  impression_id: s.impressionString,
                  event: b.d.TREND_VIEW,
                }).catch(n())
          },
        })
      }
    },
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        o = Object(a.a)({
          loader: function () {
            return n.e(167).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        i = n('IG7M'),
        s = n('rHpw'),
        d = n('Irs7'),
        l = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(d.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          a = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.createElement(i.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.createElement(o, { actionItems: n, onClose: e })
            },
            style: l.curationControl,
            testID: c.a.caret,
            withDarkBackground: a,
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
        s = n('v6aA'),
        d = n('XOJV'),
        l = n('eSoz'),
        u = n('rxPX'),
        p = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && d.a.select(e, n)
          return r ? Object(l.f)(e, r) : void 0
        },
        b = Object(u.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: l.b.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        g = n('uCxL'),
        y = n('x5Pi'),
        E = b(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            d =
              (e.tweetId,
              c()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            l = i.useContext(s.a),
            u = l.featureSwitches,
            p = l.loggedInUserId,
            m = null == o ? void 0 : o.community_id_str
          i.useEffect(
            function () {
              m && Object(h.a)(t) && r(m).catch(n())
            },
            [t, m, n, r],
          )
          var f = u.isTrue('responsive_web_alt_text_badge_enabled'),
            b = o && Object(y.f)(o, p, t),
            E = b && Object(y.e)(b),
            v = u.isTrue('responsive_web_reactions_enabled')
          return i.createElement(
            g.a,
            a()({}, d, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: E,
              tweet: o,
              withReactions: v,
            }),
          )
        })
      t.a = E
    },
    i7AQ: function (e, t, n) {
      'use strict'
      n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        c = n('t62R'),
        i = n('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            n = e.linkColor,
            a = e.textColor,
            o = d(t, n)
          return o ? r.createElement(c.b, { color: a, numberOfLines: 2, size: 'subtext2', style: m.root }, o) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var d = function (e, t) {
          return e.length >= 2 ? u(e, t) : 1 === e.length ? l(e[0], t) : null
        },
        l = function (e, t) {
          return r.createElement(o.a.I18NFormatMessage, { $i18n: 'g1e704c3' }, p(e, t, !0))
        },
        u = function (e, t) {
          return r.createElement(o.a.I18NFormatMessage, { $i18n: 'i7bba09d' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return r.createElement(
            c.b,
            { color: t, link: e.link, size: 'subtext2', style: n && m.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        m = i.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
  },
])
//# sourceMappingURL=WIPED
