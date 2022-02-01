;(window.webpackJsonp = window.webpackJsonp || []).push([
  [78],
  {
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        i = r('k49u'),
        o = r('LVU8'),
        l = r('3XMw'),
        s = r.n(l).a.i1801686,
        u =
          ((n = {}),
          c()(n, i.a.GenericForbidden, { toast: Object(o.a)() }),
          c()(n, i.a.InvalidRequestUrl, { toast: { text: s, withClearButton: !0 } }),
          c()(n, 'showToast', !0),
          n)
    },
    '6M1P': function (e, t, r) {
      'use strict'
      var n = r('WpDa'),
        a = r('rJrz'),
        c = r('ZNT5')
      t.a = function (e) {
        return Object(c.a)({
          timelineId: 'retweetersGraphQL-'.concat(e),
          getEndpoint: function (e) {
            return e.TweetActivity.fetchRetweetedBy
          },
          getEndpointParams: function (t) {
            var r = t.count,
              n = t.cursor
            return { count: r, cursor: 'string' == typeof n ? n : void 0, tweetId: e }
          },
          formatResponse: n.a,
          context: 'FETCH_TWEET_ACTIVITY_RETWEETS',
          perfKey: 'retweetersGraphQL',
          staleIntervalMs: a.a,
        })
      }
    },
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        a = r('KEM+'),
        c = r.n(a),
        i = r('ezF+'),
        o = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        s = {
          loader: function () {
            return Promise.all([r.e(0), r.e(342)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(344)]).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = i.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), c()(n, o.Cell, s), c()(n, o.PreviewCard, u), n),
      })
    },
    SCGq: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'QuoteTweetActivityScreen', function () {
          return U
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        i = r.n(c),
        o = r('1Pcy'),
        l = r.n(o),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        h = r.n(f),
        y = r('KEM+'),
        g = r.n(y),
        m = (r('2G9S'), r('ERkP')),
        v = r.n(m),
        _ = r('es0u'),
        w = (r('WNMA'), r('KqXw'), r('6M1P')),
        T = r('XOJV'),
        b = r('rxPX'),
        E = function (e, t) {
          return t.match.params.statusId
        },
        S = function (e, t) {
          return t.match.params.screenName
        },
        C = function (e, t) {
          return T.a.selectHydrated(e, E(0, t))
        },
        O = Object(b.a)()
          .propsFromState(function () {
            return { screenName: S, statusId: E, tweet: C }
          })
          .adjustStateProps(function (e) {
            var t = e.screenName,
              r = e.statusId
            return { screenName: t, statusId: r, tweet: e.tweet, usersUrtModule: Object(w.a)(r) }
          })
          .withAnalytics({ page: 'quote_tweets_timeline' }),
        P = r('FIs5'),
        k = r('3XMw'),
        I = r.n(k),
        R = r('yoO3'),
        M = r('u3ZE'),
        j = r('h2mu'),
        x = r('3IPs'),
        L = r('VS6U'),
        q = r('Irs7')
      function F(e) {
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
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var A = I.a.bd7c039f,
        D = I.a.e9f1fbcb,
        H = { vertical: 'tweet_detail_quote' },
        K = v.a.createElement(P.a, { message: D }),
        U = (function (e) {
          u()(r, e)
          var t = F(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_quoteTweetSearchQueryString', 'quoted_tweet_id:'.concat(e.props.statusId)),
              g()(l()(e), '_renderQuoteTweetTimeline', function () {
                return v.a.createElement(j.a, {
                  emptyStateComponent: K,
                  fetchOptions: H,
                  query: e._quoteTweetSearchQueryString,
                  querySrc: M.a.TweetDetailQuoteTweet,
                  searchMode: x.c.Top,
                })
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.tweet
                  return v.a.createElement(
                    R.a,
                    null,
                    v.a.createElement(L.a, {
                      backLocation: r ? r.permalink : '/',
                      history: t,
                      primaryContent: this._renderQuoteTweetTimeline(),
                      sidebarContent: v.a.createElement(_.a, { withWhoToFollow: !1 }),
                      title: A,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component)
      t.default = Object(q.a)(O(U))
    },
    h2mu: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n,
        a = r('VrFO'),
        c = r.n(a),
        i = r('Y9Ll'),
        o = r.n(i),
        l = r('1Pcy'),
        s = r.n(l),
        u = r('5Yy7'),
        d = r.n(u),
        p = r('N+ot'),
        f = r.n(p),
        h = r('AuHH'),
        y = r.n(h),
        g = r('KEM+'),
        m = r.n(g),
        v = (r('2G9S'), r('ERkP')),
        _ = r.n(v),
        w = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        T = r('QIgh'),
        b = r('8UdT'),
        E = r('iu0J'),
        S = r('zgaL'),
        C = r('PH3B'),
        O = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        P = {
          loader: function () {
            return r.e(226).then(r.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: O.a.Critical,
        },
        k = w.e(P),
        I = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        R = {
          loader: function () {
            return r.e(347).then(r.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: O.a.Critical,
        },
        M = {
          loader: function () {
            return r.e(347).then(r.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: O.a.Critical,
        },
        j = {
          loader: function () {
            return r.e(347).then(r.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: O.a.Critical,
        },
        x = w.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((n = {}), m()(n, I.Expand, R), m()(n, I.Replace, M), m()(n, I.Suggest, j), n),
        })
      function L(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var F = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return q(
            q(
              {},
              Object(T.a)({
                tweetDismissable: !0,
                displayBlocked: !0,
                shouldStoreTypeaheadItem: t,
                withUserPresence: r,
              }),
            ),
            (function (e) {
              var t,
                r = e.shouldStoreTypeaheadItem
              return (
                (t = {}),
                m()(t, b.b.News, C.a),
                m()(t, b.b.EventSummary, Object(E.a)({ shouldStoreTypeaheadItem: r })),
                m()(t, b.b.RelatedSearch, k),
                m()(t, b.b.FollowSearch, w.e(w.a())),
                m()(t, b.b.FollowSearchAction, w.e(w.a())),
                m()(t, b.b.Place, w.e(w.a())),
                m()(t, b.b.MomentAnnotation, S.a),
                m()(t, b.b.Spelling, x),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        A = r('3X8/'),
        D = r('oQhu'),
        H = r('EUHl'),
        K = r('7BdX'),
        U = r('fTQJ'),
        N = r('i6OR'),
        X = r('X04g'),
        z = r('t62R'),
        Q = r('FIs5'),
        B = r('v6aA'),
        J = r('3XMw'),
        V = r.n(J)
      function W(e) {
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
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var Y = V.a.c09de2d4,
        Z = _.a.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          _.a.createElement(z.b, { link: '/settings/search' }, V.a.d2918e88),
        ),
        G = V.a.ae111c99,
        $ = (function (e) {
          d()(r, e)
          var t = W(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case X.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case X.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case X.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              m()(s()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  a = t.searchFilters,
                  c = t.searchMode,
                  i = t.urtEndpointOptions,
                  o = t.vertical
                return e._getMemoizedModule(r, n, c, a, o, i)
              }),
              m()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || _.a.createElement(Q.a, { header: G({ query: n }), message: Z })
              }),
              m()(
                s()(e),
                '_getMemoizedModule',
                Object(D.a)(function (e, t, r, n, a, c) {
                  return Object(N.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: a,
                    urtEndpointOptions: c,
                  })
                }),
              ),
              m()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(D.a)(function (t) {
                  return F({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  return _.a.createElement(U.a, {
                    apiErrorHandlerMap: A.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: H.a.CLIENT,
                    prerollDisplayLocation: K.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: Y,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(_.a.Component)
      m()($, 'contextType', B.a)
      t.a = $
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return h
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        i = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('vrRf'), r('z84I'), r('u3ZE')),
        o = r('3IPs'),
        l = r('ZNT5'),
        s = r('eR3e'),
        u = 'search-',
        d = ' near:me',
        p =
          ((n = {}),
          c()(n, o.c.Top, {}),
          c()(n, o.c.Live, { tweet_search_mode: o.c.Live }),
          c()(n, o.c.User, { result_filter: o.c.User }),
          c()(n, o.c.Image, { result_filter: o.c.Image }),
          c()(n, o.c.Video, { result_filter: o.c.Video }),
          n),
        f = function (e) {
          return (function (e) {
            return e === i.a.SpellingCorrectionRevertClick || e === i.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        h = function () {
          return function (e, t) {
            e(
              Object(s.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(u)
                })
                .map(function (e) {
                  return Object(s.g)(e)
                }),
            )
          }
        }
      t.b = function (e) {
        var t = e.query,
          r = e.searchMode,
          n = void 0 === r ? o.c.Top : r,
          a = e.querySource,
          c = e.searchFilters,
          i = e.vertical,
          s = e.urtEndpointOptions,
          h = f(a),
          y = c && c.peopleFilter ? 'searcher_follows' : void 0,
          g = y ? '-pf' : '',
          m = c && c.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          v = ''.concat(u).concat(m, '-').concat(n).concat(h).concat(g)
        return Object(l.a)({
          timelineId: v,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == s ? void 0 : s.requestParams,
              { q: m, social_filter: y, vertical: i },
              p[n],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: n === o.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    rJrz: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      var n = 1e4
    },
    u3ZE: function (e, t, r) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
    zgaL: function (e, t, r) {
      'use strict'
      var n = r('ezF+'),
        a =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(218).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
