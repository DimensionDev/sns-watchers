;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var n,
        a = r('KEM+'),
        i = r.n(a),
        c = r('k49u'),
        o = r('LVU8'),
        l = r('3XMw'),
        s = r.n(l).a.i1801686,
        u =
          ((n = {}),
          i()(n, c.a.GenericForbidden, { toast: Object(o.a)() }),
          i()(n, c.a.InvalidRequestUrl, { toast: { text: s, withClearButton: !0 } }),
          i()(n, 'showToast', !0),
          n)
    },
    '6M1P': function (e, t, r) {
      'use strict'
      var n = r('WpDa'),
        a = r('rJrz'),
        i = r('ZNT5')
      t.a = function (e) {
        return Object(i.a)({
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
        i = r.n(a),
        c = r('ezF+'),
        o = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('XBtf')),
        s = {
          loader: function () {
            return Promise.all([r.e(0), r.e(347)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(349)]).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = c.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), i()(n, o.Cell, s), i()(n, o.PreviewCard, u), n),
      })
    },
    SCGq: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'QuoteTweetActivityScreen', function () {
          return K
        })
      var n = r('VrFO'),
        a = r.n(n),
        i = r('Y9Ll'),
        c = r.n(i),
        o = r('1Pcy'),
        l = r.n(o),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('2VqO'),
        p = r.n(d),
        h = r('KEM+'),
        f = r.n(h),
        y = (r('2G9S'), r('ERkP')),
        m = r.n(y),
        _ = r('es0u'),
        g = (r('KqXw'), r('WNMA'), r('6M1P')),
        w = r('XOJV'),
        v = r('rxPX'),
        T = function (e, t) {
          return t.match.params.statusId
        },
        E = function (e, t) {
          return t.match.params.screenName
        },
        S = function (e, t) {
          return w.a.selectHydrated(e, T(0, t))
        },
        C = Object(v.a)()
          .propsFromState(function () {
            return { screenName: E, statusId: T, tweet: S }
          })
          .adjustStateProps(function (e) {
            var t = e.screenName,
              r = e.statusId
            return { screenName: t, statusId: r, tweet: e.tweet, usersUrtModule: Object(g.a)(r) }
          })
          .withAnalytics({ page: 'quote_tweets_timeline' }),
        b = r('FIs5'),
        k = r('3XMw'),
        I = r.n(k),
        P = r('yoO3'),
        O = r('u3ZE'),
        M = r('h2mu'),
        q = r('3IPs'),
        x = r('VS6U'),
        R = r('Irs7'),
        L = I.a.bd7c039f,
        F = I.a.e9f1fbcb,
        j = { vertical: 'tweet_detail_quote' },
        A = m.a.createElement(b.a, { message: F }),
        K = (function (e) {
          u()(r, e)
          var t = p()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(l()(e), '_quoteTweetSearchQueryString', 'quoted_tweet_id:'.concat(e.props.statusId)),
              f()(l()(e), '_renderQuoteTweetTimeline', function () {
                return m.a.createElement(M.a, {
                  emptyStateComponent: A,
                  fetchOptions: j,
                  query: e._quoteTweetSearchQueryString,
                  querySrc: O.a.TweetDetailQuoteTweet,
                  searchMode: q.c.Top,
                })
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.tweet
                  return m.a.createElement(
                    P.a,
                    null,
                    m.a.createElement(x.a, {
                      backLocation: r ? r.permalink : '/',
                      history: t,
                      primaryContent: this._renderQuoteTweetTimeline(),
                      sidebarContent: m.a.createElement(_.a, { withWhoToFollow: !1 }),
                      title: L,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(m.a.Component)
      t.default = Object(R.a)(C(K))
    },
    h2mu: function (e, t, r) {
      'use strict'
      var n,
        a = r('VrFO'),
        i = r.n(a),
        c = r('Y9Ll'),
        o = r.n(c),
        l = r('1Pcy'),
        s = r.n(l),
        u = r('5Yy7'),
        d = r.n(u),
        p = r('2VqO'),
        h = r.n(p),
        f = r('KEM+'),
        y = r.n(f),
        m = (r('2G9S'), r('ERkP')),
        _ = r.n(m),
        g = r('yiKp'),
        w = r.n(g),
        v = r('ezF+'),
        T = r('QIgh'),
        E = r('8UdT'),
        S = r('iu0J'),
        C = r('zgaL'),
        b = r('PH3B'),
        k = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('XBtf')),
        I = {
          loader: function () {
            return r.e(230).then(r.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: k.a.Critical,
        },
        P = v.e(I),
        O = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        M = {
          loader: function () {
            return r.e(352).then(r.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: k.a.Critical,
        },
        q = {
          loader: function () {
            return r.e(352).then(r.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: k.a.Critical,
        },
        x = {
          loader: function () {
            return r.e(352).then(r.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: k.a.Critical,
        },
        R = v.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((n = {}), y()(n, O.Expand, M), y()(n, O.Replace, q), y()(n, O.Suggest, x), n),
        }),
        L = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return w()(
            w()(
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
                y()(t, E.b.News, b.a),
                y()(t, E.b.EventSummary, Object(S.a)({ shouldStoreTypeaheadItem: r })),
                y()(t, E.b.RelatedSearch, P),
                y()(t, E.b.FollowSearch, v.e(v.a())),
                y()(t, E.b.FollowSearchAction, v.e(v.a())),
                y()(t, E.b.Place, v.e(v.a())),
                y()(t, E.b.MomentAnnotation, C.a),
                y()(t, E.b.Spelling, R),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        F = r('3X8/'),
        j = r('oQhu'),
        A = r('EUHl'),
        K = r('7BdX'),
        U = r('fTQJ'),
        z = r('i6OR'),
        Q = r('X04g'),
        X = r('t62R'),
        D = r('FIs5'),
        N = r('v6aA'),
        H = r('3XMw'),
        V = r.n(H),
        J = V.a.c09de2d4,
        B = _.a.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          _.a.createElement(X.b, { link: '/settings/search' }, V.a.d2918e88),
        ),
        Y = V.a.ae111c99,
        G = (function (e) {
          d()(r, e)
          var t = h()(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case Q.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case Q.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case Q.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              y()(s()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  a = t.searchFilters,
                  i = t.searchMode,
                  c = t.urtEndpointOptions,
                  o = t.vertical
                return e._getMemoizedModule(r, n, i, a, o, c)
              }),
              y()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || _.a.createElement(D.a, { header: Y({ query: n }), message: B })
              }),
              y()(
                s()(e),
                '_getMemoizedModule',
                Object(j.a)(function (e, t, r, n, a, i) {
                  return Object(z.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: a,
                    urtEndpointOptions: i,
                  })
                }),
              ),
              y()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(j.a)(function (t) {
                  return L({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
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
                    apiErrorHandlerMap: F.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: A.a.CLIENT,
                    prerollDisplayLocation: K.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: J,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(_.a.Component)
      y()(G, 'contextType', N.a)
      t.a = G
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      })
      var n,
        a = r('KEM+'),
        i = r.n(a),
        c = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('7x/C'), r('vrRf'), r('z84I'), r('u3ZE')),
        o = r('3IPs'),
        l = r('ZNT5'),
        s = r('eR3e'),
        u = 'search-',
        d = ' near:me',
        p =
          ((n = {}),
          i()(n, o.c.Top, {}),
          i()(n, o.c.Live, { tweet_search_mode: o.c.Live }),
          i()(n, o.c.User, { result_filter: o.c.User }),
          i()(n, o.c.Image, { result_filter: o.c.Image }),
          i()(n, o.c.Video, { result_filter: o.c.Video }),
          n),
        h = function (e) {
          return (function (e) {
            return e === c.a.SpellingCorrectionRevertClick || e === c.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        f = function () {
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
          i = e.searchFilters,
          c = e.vertical,
          s = e.urtEndpointOptions,
          f = h(a),
          y = i && i.peopleFilter ? 'searcher_follows' : void 0,
          m = y ? '-pf' : '',
          _ = i && i.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          g = ''.concat(u).concat(_, '-').concat(n).concat(f).concat(m)
        return Object(l.a)({
          timelineId: g,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == s ? void 0 : s.requestParams,
              { q: _, social_filter: y, vertical: c },
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
          (r('lTEL'),
          r('7x/C'),
          r('JtPf'),
          r('87if'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(222).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
