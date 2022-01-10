;(window.webpackJsonp = window.webpackJsonp || []).push([
  [226],
  {
    '+92Z': function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = (r('yH/f'), r('ho0z'), r('z84I'), r('1t7P'), r('jQ/y'), r('ezF+')),
        i = r('6rlp'),
        c = r('ERkP'),
        s = r('vjRr'),
        l = r('/Ikv'),
        d = r('VPAj'),
        u = r('0KEI'),
        p = r('RoyM'),
        m = r('aX4+'),
        f = r('caTy'),
        b = r('cFuS'),
        h = r('zh9S'),
        g = r('Rp9C'),
        y = (r('OZaJ'), r('VrFO')),
        E = r.n(y),
        v = r('Y9Ll'),
        w = r.n(v),
        I = r('5Yy7'),
        T = r.n(I),
        O = r('N+ot'),
        M = r.n(O),
        _ = r('AuHH'),
        C = r.n(_),
        A = (r('WNMA'), r('KqXw'), r('MvUL'), r('hBvt'), r('aTAq')),
        R = r('b5s6'),
        k = r('i7AQ'),
        x = r('zOwA'),
        P = 'metadata',
        j = 'trend',
        S = r('MWbm'),
        F = r('hxu0'),
        H = r('PbQQ'),
        L = r('htQn'),
        D = r('pjBI'),
        z = r('t62R'),
        N = r('e5HP'),
        U = r('rHpw')
      function B(e) {
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
          var r,
            n = C()(e)
          if (t) {
            var a = C()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return M()(this, r)
        }
      }
      var V,
        W = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        Y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return e.replace('#', '').charAt(t).match(W) ? 'rtl' : 'ltr'
        },
        K = (function (e) {
          T()(r, e)
          var t = B(r)
          function r() {
            return E()(this, r), t.apply(this, arguments)
          }
          return (
            w()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.associatedTweetIds,
                    n = t.attachment,
                    a = t.description,
                    o = t.domainContext,
                    i = t.groupedTrends,
                    s = t.isInSidebar,
                    l = t.link,
                    d = t.name,
                    u = t.onClick,
                    p = t.rank,
                    m = t.trendFeedbackMenu,
                    f = Y(d),
                    b = l && ('string' == typeof l ? { pathname: l } : l),
                    h = r && r.length ? r[0] : void 0
                  return c.createElement(H.a.Consumer, null, function (t) {
                    return c.createElement(
                      c.Fragment,
                      null,
                      c.createElement(
                        L.a,
                        {
                          link: b ? t.withAnchorless(b) : void 0,
                          onPress: u,
                          style: Q.rootLink,
                          testID: j,
                          withDarkerInteractiveBackground: s,
                        },
                        c.createElement(
                          S.a,
                          { style: Q.content },
                          c.createElement(
                            D.a,
                            null,
                            p
                              ? c.createElement(z.b, { accessibilityHidden: !0, color: 'gray700', size: 'subtext2' }, p)
                              : null,
                            c.createElement(z.b, { color: 'gray700', size: 'subtext2' }, o || null),
                          ),
                          c.createElement(z.b, { dir: f, style: Q.name, weight: 'bold', withHashflags: !0 }, d),
                          a ? c.createElement(z.b, { color: 'gray700', style: Q.description }, a) : null,
                          h ? c.createElement(R.a, { isCondensed: !0, style: Q.withMarginTop, tweetId: h }) : null,
                          n ? c.createElement(S.a, { style: Q.attachment }, n) : null,
                          c.createElement(k.a, { groupedTrends: i }),
                          e._renderMetadata(),
                          c.createElement(S.a, { style: Q.trendFeedbackMenuContainer }, m),
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
                    r = t.metaDescription,
                    n = t.promotedContent,
                    a = t.socialProofUser
                  n
                    ? (e = c.createElement(N.a, { label: r, promotedContent: n }))
                    : a && r
                    ? (e = c.createElement(x.a, {
                        image: a.profile_image_url_https,
                        key: a.id_str,
                        label: r,
                        textSize: 'subtext2',
                      }))
                    : r && (e = r)
                  var o = Object(A.a)(e) && e.length ? Y(e, e.length - 1) : void 0
                  return e
                    ? c.createElement(
                        z.b,
                        { color: 'gray700', dir: o, size: 'subtext2', style: Q.withMarginTop, testID: P },
                        e,
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(c.Component),
        G = Object(F.a)(K),
        Q = U.a.create(function (e) {
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
        X = r('G6rE')
      function J(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : J(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var q = l.a.CardNames,
        $ = function (e) {
          return e && e.promotedTrendId
            ? { disclosure_type: e.disclosureType, impression_id: e.promotedTrendId }
            : void 0
        },
        ee = Object.freeze(
          ((V = {}),
          a()(V, q.LIVE_EVENT, !0),
          a()(V, q.MOMENT, !0),
          a()(V, q.SUMMARY, !0),
          a()(V, q.SUMMARY_LARGE_IMAGE, !0),
          a()(V, q.AUDIOSPACE, !0),
          V),
        ),
        te = function (e, t) {
          if (e && e.length > 0) {
            var r = e[0]
            if (!t && r.name !== q.LIVE_EVENT && r.name !== q.AUDIOSPACE) return
            var n = r.name === q.SUMMARY_LARGE_IMAGE ? q.SUMMARY : r.name
            if (!ee[n]) return
            return c.createElement(m.a, {
              card: { url: r.url, name: n, binding_values: r.binding_values, users: r.users },
              cardContext: { locationKey: 'trend', tweetUserId: 'TREND_CARD_NO_TWEET_USER_ID' },
              cardState: 'secondary',
            })
          }
        },
        re = function (e) {
          var t = e.entry
          return {
            cards: s.a.createManyHydratedSelector(t.content.associatedCardUrls || []),
            socialProofUsers: function (e) {
              return X.e.selectMany(e, t.content.associatedUserIds || [])
            },
          }
        }
      t.default = function (e) {
        var t = e.errorContext,
          r = e.withThirdPartyCards
        return o.g({
          isFocusable: Object(d.a)(!0),
          component: G,
          bindActions: function (e) {
            e.module
            return {
              logTrend: i.c,
              scribe: h.c,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(t),
            }
          },
          selectData: re,
          createProps: function (e) {
            var t = e.actions,
              n = t.createLocalApiErrorHandler,
              a = t.logTrend,
              o = t.scribe,
              i = e.data,
              s = i.cards,
              l = i.socialProofUsers,
              d = e.entry,
              u = e.feedbackItems,
              m = (e.module.selectFeedbackActions, e.scribeData),
              h = e.scribeNamespace,
              g = d.content,
              y = g.promotedMetadata,
              E = g.groupedTrends
                ? g.groupedTrends.map(function (e) {
                    return { name: e.name, link: Object(f.b)(e.url) }
                  })
                : []
            return {
              associatedTweetIds: g.associatedTweetIds,
              attachment: te(s, r),
              description: g.description,
              domainContext: g.trendMetadata.domainContext,
              groupedTrends: E,
              link: Object(f.b)(g.url),
              metaDescription: g.trendMetadata && g.trendMetadata.metaDescription,
              name: g.name,
              onClick: function () {
                o(Z(Z({}, h), {}, { action: 'search' }), m),
                  y &&
                    y.promotedTrendId &&
                    a({
                      promoted_trend_id: y.promotedTrendId,
                      impression_id: y.impressionString,
                      event: b.d.TREND_CLICK,
                    }).catch(n())
              },
              promotedContent: $(y),
              rank: g.rank,
              trendFeedbackMenu: c.createElement(p.a, { feedbackItems: u }),
              socialProofUser: l && l[0],
            }
          },
          getScribeDataItem: function (e) {
            var t = e.content,
              r = t.name,
              n = t.promotedMetadata,
              a = e.itemMetadata.clientEventInfo
            return g.a.getTrendItem(r, n, a)
          },
          onImpression: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              n = t.logTrend,
              a = t.scribe,
              o = e.entry,
              i = e.scribeData,
              c = e.scribeNamespace,
              s = o.content.promotedMetadata
            a(Z(Z({}, c), {}, { action: 'impression' }), i),
              s &&
                s.promotedTrendId &&
                n({
                  promoted_trend_id: s.promotedTrendId,
                  impression_id: s.impressionString,
                  event: b.d.TREND_VIEW,
                }).catch(r())
          },
        })
      }
    },
    b5s6: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        a = r.n(n),
        o = r('m3Bd'),
        i = r.n(o),
        c = r('ERkP'),
        s = r('v6aA'),
        l = r('XOJV'),
        d = r('eSoz'),
        u = r('rxPX'),
        p = r('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var r = t.tweetId,
            n = r && l.a.select(e, r)
          return n ? Object(d.f)(e, n) : void 0
        },
        b = Object(u.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: l.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.b.fetchOneIfNeeded,
            }
          }),
        h = r('YeIG'),
        g = r('uCxL'),
        y = r('x5Pi'),
        E = b(function (e) {
          var t = e.community,
            r = e.createLocalApiErrorHandler,
            n = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            l =
              (e.tweetId,
              i()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            d = c.useContext(s.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == o ? void 0 : o.community_id_str
          c.useEffect(
            function () {
              m && Object(h.a)(t) && n(m).catch(r())
            },
            [t, m, r, n],
          )
          var f = u.isTrue('responsive_web_alt_text_badge_enabled'),
            b = o && Object(y.f)(o, p, t),
            E = b && Object(y.e)(b),
            v = u.isTrue('responsive_web_reactions_enabled')
          return c.createElement(
            g.a,
            a()({}, l, {
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
    i7AQ: function (e, t, r) {
      'use strict'
      r('hBvt'), r('ho0z')
      var n = r('ERkP'),
        a = r('3XMw'),
        o = r.n(a),
        i = r('t62R'),
        c = r('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            r = e.linkColor,
            a = e.textColor,
            o = l(t, r)
          return o ? n.createElement(i.b, { color: a, numberOfLines: 2, size: 'subtext2', style: m.root }, o) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var l = function (e, t) {
          return e.length >= 2 ? u(e, t) : 1 === e.length ? d(e[0], t) : null
        },
        d = function (e, t) {
          return n.createElement(o.a.I18NFormatMessage, { $i18n: 'g1e704c3' }, p(e, t, !0))
        },
        u = function (e, t) {
          return n.createElement(o.a.I18NFormatMessage, { $i18n: 'i7bba09d' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return n.createElement(
            i.b,
            { color: t, link: e.link, size: 'subtext2', style: r && m.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        m = c.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
    zOwA: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return I
      })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
        c = r('5Yy7'),
        s = r.n(c),
        l = r('N+ot'),
        d = r.n(l),
        u = r('AuHH'),
        p = r.n(u),
        m = r('KEM+'),
        f = r.n(m),
        b = r('ERkP'),
        h = r('9Xij'),
        g = r('t62R'),
        y = r('rHpw'),
        E = r('U+bB'),
        v = r('MWbm')
      function w(e) {
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
          var r,
            n = p()(e)
          if (t) {
            var a = p()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var I = (function (e) {
        s()(r, e)
        var t = w(r)
        function r() {
          return a()(this, r), t.apply(this, arguments)
        }
        return (
          i()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.color,
                  r = e.image,
                  n = e.label,
                  a = e.textSize
                return b.createElement(
                  v.a,
                  { style: T.root },
                  r
                    ? b.createElement(
                        v.a,
                        { style: T.imageContainer },
                        b.createElement(h.a, { ratio: 1 }, b.createElement(E.a, { source: r, style: T.image })),
                      )
                    : null,
                  b.createElement(g.b, { color: t, size: a }, n),
                )
              },
            },
          ]),
          r
        )
      })(b.PureComponent)
      f()(I, 'defaultProps', { color: 'gray700', textSize: 'body' })
      var T = y.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          imageContainer: {
            alignSelf: 'flex-start',
            backgroundColor: e.colors.gray200,
            flexShrink: 0,
            height: e.fontSizes.headline1,
            marginRight: e.spaces.space4,
            width: e.fontSizes.headline1,
            borderRadius: e.borderRadii.infinite,
          },
          image: { height: '100%', width: '100%', borderRadius: e.borderRadii.infinite },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
