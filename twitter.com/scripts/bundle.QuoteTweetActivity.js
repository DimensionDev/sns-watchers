;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        i = r('k49u'),
        o = r('LVU8'),
        s = r('3XMw'),
        u = r.n(s).a.i1801686,
        l =
          ((n = {}),
          c()(n, i.a.GenericForbidden, { toast: Object(o.a)() }),
          c()(n, i.a.InvalidRequestUrl, { toast: { text: u, withClearButton: !0 } }),
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
    SCGq: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'QuoteTweetActivityScreen', function () {
          return L
        })
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        i = r.n(c),
        o = r('1Pcy'),
        s = r.n(o),
        u = r('5Yy7'),
        l = r.n(u),
        d = r('2VqO'),
        p = r.n(d),
        h = r('KEM+'),
        f = r.n(h),
        _ = (r('2G9S'), r('ERkP')),
        m = r.n(_),
        y = r('es0u'),
        w = (r('KqXw'), r('WNMA'), r('6M1P')),
        v = r('XOJV'),
        T = r('rxPX'),
        g = function (e, t) {
          return t.match.params.statusId
        },
        E = function (e, t) {
          return t.match.params.screenName
        },
        S = function (e, t) {
          return v.a.selectHydrated(e, g(0, t))
        },
        b = Object(T.a)()
          .propsFromState(function () {
            return { screenName: E, statusId: g, tweet: S }
          })
          .adjustStateProps(function (e) {
            var t = e.screenName,
              r = e.statusId
            return { screenName: t, statusId: r, tweet: e.tweet, usersUrtModule: Object(w.a)(r) }
          })
          .withAnalytics({ page: 'quote_tweets_timeline' }),
        k = r('FIs5'),
        C = r('3XMw'),
        I = r.n(C),
        M = r('yoO3'),
        O = r('u3ZE'),
        q = r('h2mu'),
        P = r('3IPs'),
        R = r('VS6U'),
        F = r('Irs7'),
        j = I.a.bd7c039f,
        x = I.a.e9f1fbcb,
        U = { vertical: 'tweet_detail_quote' },
        A = m.a.createElement(k.a, { message: x }),
        L = (function (e) {
          l()(r, e)
          var t = p()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(s()(e), '_quoteTweetSearchQueryString', 'quoted_tweet_id:'.concat(e.props.statusId)),
              f()(s()(e), '_renderQuoteTweetTimeline', function () {
                return m.a.createElement(q.a, {
                  emptyStateComponent: A,
                  fetchOptions: U,
                  query: e._quoteTweetSearchQueryString,
                  querySrc: O.a.TweetDetailQuoteTweet,
                  searchMode: P.c.Top,
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
                  return m.a.createElement(
                    M.a,
                    null,
                    m.a.createElement(R.a, {
                      backLocation: r ? r.permalink : '/',
                      history: t,
                      primaryContent: this._renderQuoteTweetTimeline(),
                      sidebarContent: m.a.createElement(y.a, { withWhoToFollow: !1 }),
                      title: j,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(m.a.Component)
      t.default = Object(F.a)(b(L))
    },
    h2mu: function (e, t, r) {
      'use strict'
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        i = r.n(c),
        o = r('1Pcy'),
        s = r.n(o),
        u = r('5Yy7'),
        l = r.n(u),
        d = r('2VqO'),
        p = r.n(d),
        h = r('KEM+'),
        f = r.n(h),
        _ = (r('2G9S'), r('ERkP')),
        m = r.n(_),
        y = r('yiKp'),
        w = r.n(y),
        v = r('ezF+'),
        T = r('QIgh'),
        g = r('8UdT'),
        E = r('iu0J'),
        S = r('zgaL'),
        b = r('PH3B'),
        k = r('dVvn'),
        C = r('14Yn'),
        I = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return w()(
            w()(
              {},
              Object(T.createConfiguration)({
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
                f()(t, g.b.News, b.a),
                f()(t, g.b.EventSummary, Object(E.a)({ shouldStoreTypeaheadItem: r })),
                f()(t, g.b.RelatedSearch, k.a),
                f()(t, g.b.FollowSearch, v.e(v.a())),
                f()(t, g.b.FollowSearchAction, v.e(v.a())),
                f()(t, g.b.Place, v.e(v.a())),
                f()(t, g.b.MomentAnnotation, S.a),
                f()(t, g.b.Spelling, C.a),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        M = r('3X8/'),
        O = r('oQhu'),
        q = r('EUHl'),
        P = r('7BdX'),
        R = r('fTQJ'),
        F = r('i6OR'),
        j = r('X04g'),
        x = r('t62R'),
        U = r('FIs5'),
        A = r('v6aA'),
        L = r('3XMw'),
        Q = r.n(L),
        V = Q.a.c09de2d4,
        N = m.a.createElement(
          Q.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          m.a.createElement(x.b, { link: '/settings/search' }, Q.a.d2918e88),
        ),
        X = Q.a.ae111c99,
        z = (function (e) {
          l()(r, e)
          var t = p()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case j.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case j.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case j.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              f()(s()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  a = t.searchFilters,
                  c = t.searchMode,
                  i = t.urtEndpointOptions,
                  o = t.vertical
                return e._getMemoizedModule(r, n, c, a, o, i)
              }),
              f()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || m.a.createElement(U.a, { header: X({ query: n }), message: N })
              }),
              f()(
                s()(e),
                '_getMemoizedModule',
                Object(O.a)(function (e, t, r, n, a, c) {
                  return Object(F.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: a,
                    urtEndpointOptions: c,
                  })
                }),
              ),
              f()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(O.a)(function (t) {
                  return I({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
                }),
              ),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(R.a, {
                    apiErrorHandlerMap: M.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: q.a.CLIENT,
                    prerollDisplayLocation: P.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: V,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(m.a.Component)
      f()(z, 'contextType', A.a)
      t.a = z
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      })
      var n,
        a = r('KEM+'),
        c = r.n(a),
        i = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('7x/C'), r('vrRf'), r('z84I'), r('u3ZE')),
        o = r('3IPs'),
        s = r('ZNT5'),
        u = r('eR3e'),
        l = 'search-',
        d = ' near:me',
        p =
          ((n = {}),
          c()(n, o.c.Top, {}),
          c()(n, o.c.Live, { tweet_search_mode: o.c.Live }),
          c()(n, o.c.User, { result_filter: o.c.User }),
          c()(n, o.c.Image, { result_filter: o.c.Image }),
          c()(n, o.c.Video, { result_filter: o.c.Video }),
          n),
        h = function (e) {
          return (function (e) {
            return e === i.a.SpellingCorrectionRevertClick || e === i.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        f = function () {
          return function (e, t) {
            e(
              Object(u.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(l)
                })
                .map(function (e) {
                  return Object(u.g)(e)
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
          u = e.urtEndpointOptions,
          f = h(a),
          _ = c && c.peopleFilter ? 'searcher_follows' : void 0,
          m = _ ? '-pf' : '',
          y = c && c.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          w = ''.concat(l).concat(y, '-').concat(n).concat(f).concat(m)
        return Object(s.a)({
          timelineId: w,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == u ? void 0 : u.requestParams,
              { q: y, social_filter: _, vertical: i },
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
  },
])
//# sourceMappingURL=WIPED
