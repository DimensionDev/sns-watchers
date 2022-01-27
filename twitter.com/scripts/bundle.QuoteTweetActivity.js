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
            return Promise.all([r.e(0), r.e(338)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(340)]).then(r.bind(null, 'hX2d'))
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
          return K
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
        v = r('es0u'),
        _ = (r('WNMA'), r('KqXw'), r('6M1P')),
        w = r('XOJV'),
        E = r('rxPX'),
        T = function (e, t) {
          return t.match.params.statusId
        },
        b = function (e, t) {
          return t.match.params.screenName
        },
        S = function (e, t) {
          return w.a.selectHydrated(e, T(0, t))
        },
        C = Object(E.a)()
          .propsFromState(function () {
            return { screenName: b, statusId: T, tweet: S }
          })
          .adjustStateProps(function (e) {
            var t = e.screenName,
              r = e.statusId
            return { screenName: t, statusId: r, tweet: e.tweet, usersUrtModule: Object(_.a)(r) }
          })
          .withAnalytics({ page: 'quote_tweets_timeline' }),
        O = r('FIs5'),
        P = r('3XMw'),
        k = r.n(P),
        I = r('yoO3'),
        R = r('u3ZE'),
        M = r('h2mu'),
        j = r('3IPs'),
        x = r('VS6U'),
        L = r('Irs7')
      function q(e) {
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
      var F = k.a.bd7c039f,
        A = k.a.e9f1fbcb,
        H = { vertical: 'tweet_detail_quote' },
        D = m.createElement(O.a, { message: A }),
        K = (function (e) {
          u()(r, e)
          var t = q(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_quoteTweetSearchQueryString', 'quoted_tweet_id:'.concat(e.props.statusId)),
              g()(l()(e), '_renderQuoteTweetTimeline', function () {
                return m.createElement(M.a, {
                  emptyStateComponent: D,
                  fetchOptions: H,
                  query: e._quoteTweetSearchQueryString,
                  querySrc: R.a.TweetDetailQuoteTweet,
                  searchMode: j.c.Top,
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
                  return m.createElement(
                    I.a,
                    null,
                    m.createElement(x.a, {
                      backLocation: r ? r.permalink : '/',
                      history: t,
                      primaryContent: this._renderQuoteTweetTimeline(),
                      sidebarContent: m.createElement(v.a, { withWhoToFollow: !1 }),
                      title: F,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(m.Component)
      t.default = Object(L.a)(C(K))
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
        _ = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        w = r('QIgh'),
        E = r('8UdT'),
        T = r('iu0J'),
        b = r('zgaL'),
        S = r('PH3B'),
        C = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        O = {
          loader: function () {
            return r.e(222).then(r.bind(null, 'sc5C'))
          },
          loaderKey: 'relatedSearchDefaultLoader',
          strategy: C.a.Critical,
        },
        P = _.e(O),
        k = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        I = {
          loader: function () {
            return r.e(343).then(r.bind(null, '5aND'))
          },
          loaderKey: 'spellingExpandLoader',
          strategy: C.a.Critical,
        },
        R = {
          loader: function () {
            return r.e(343).then(r.bind(null, '77Dd'))
          },
          loaderKey: 'spellingReplaceLoader',
          strategy: C.a.Critical,
        },
        M = {
          loader: function () {
            return r.e(343).then(r.bind(null, 'D4Iv'))
          },
          loaderKey: 'spellingSuggestLoader',
          strategy: C.a.Critical,
        },
        j = _.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((n = {}), m()(n, k.Expand, I), m()(n, k.Replace, R), m()(n, k.Suggest, M), n),
        })
      function x(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var q = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return L(
            L(
              {},
              Object(w.a)({
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
                m()(t, E.b.News, S.a),
                m()(t, E.b.EventSummary, Object(T.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: r })),
                m()(t, E.b.RelatedSearch, P),
                m()(t, E.b.FollowSearch, _.e(_.a())),
                m()(t, E.b.FollowSearchAction, _.e(_.a())),
                m()(t, E.b.Place, _.e(_.a())),
                m()(t, E.b.MomentAnnotation, b.a),
                m()(t, E.b.Spelling, j),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        F = r('3X8/'),
        A = r('oQhu'),
        H = r('EUHl'),
        D = r('7BdX'),
        K = r('fTQJ'),
        N = r('i6OR'),
        U = r('X04g'),
        X = r('t62R'),
        z = r('FIs5'),
        Q = r('v6aA'),
        B = r('3XMw'),
        J = r.n(B)
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var W = J.a.c09de2d4,
        Y = v.createElement(
          J.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          v.createElement(X.b, { link: '/settings/search' }, J.a.d2918e88),
        ),
        Z = J.a.ae111c99,
        G = (function (e) {
          d()(r, e)
          var t = V(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case U.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case U.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case U.a.ItemType.EVENT:
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
                return r || v.createElement(z.a, { header: Z({ query: n }), message: Y })
              }),
              m()(
                s()(e),
                '_getMemoizedModule',
                Object(A.a)(function (e, t, r, n, a, c) {
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
                Object(A.a)(function (t) {
                  return q({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
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
                  return v.createElement(K.a, {
                    apiErrorHandlerMap: F.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: H.a.CLIENT,
                    prerollDisplayLocation: D.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: W,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(v.Component)
      m()(G, 'contextType', Q.a)
      t.a = G
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
              return r.e(215).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(a)
    },
  },
])
//# sourceMappingURL=WIPED
