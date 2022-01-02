;(window.webpackJsonp = window.webpackJsonp || []).push([
  [78],
  {
    '3X8/': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      })
      var n,
        c = r('KEM+'),
        i = r.n(c),
        o = r('k49u'),
        a = r('LVU8'),
        s = r('3XMw'),
        u = r.n(s).a.i1801686,
        l =
          ((n = {}),
          i()(n, o.a.GenericForbidden, { toast: Object(a.a)() }),
          i()(n, o.a.InvalidRequestUrl, { toast: { text: u, withClearButton: !0 } }),
          i()(n, 'showToast', !0),
          n)
    },
    '6M1P': function (e, t, r) {
      'use strict'
      var n = r('WpDa'),
        c = r('rJrz'),
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
          staleIntervalMs: c.a,
        })
      }
    },
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        c = r('KEM+'),
        i = r.n(c),
        o = r('ezF+'),
        a = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        s = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        u = {
          loader: function () {
            return Promise.all([r.e(0), r.e(330)]).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: s.a.Critical,
        },
        l = {
          loader: function () {
            return Promise.all([r.e(0), r.e(332)]).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: s.a.Critical,
        }
      t.a = o.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), i()(n, a.Cell, u), i()(n, a.PreviewCard, l), n),
      })
    },
    SCGq: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'QuoteTweetActivityScreen', function () {
          return N
        })
      r('OZaJ')
      var n = r('VrFO'),
        c = r.n(n),
        i = r('Y9Ll'),
        o = r.n(i),
        a = r('1Pcy'),
        s = r.n(a),
        u = r('5Yy7'),
        l = r.n(u),
        p = r('N+ot'),
        f = r.n(p),
        d = r('AuHH'),
        h = r.n(d),
        y = r('KEM+'),
        m = r.n(y),
        g = (r('2G9S'), r('ERkP')),
        v = r('es0u'),
        b = (r('WNMA'), r('KqXw'), r('6M1P')),
        w = r('XOJV'),
        _ = r('rxPX'),
        E = function (e, t) {
          return t.match.params.statusId
        },
        O = function (e, t) {
          return t.match.params.screenName
        },
        S = function (e, t) {
          return w.a.selectHydrated(e, E(0, t))
        },
        C = Object(_.a)()
          .propsFromState(function () {
            return { screenName: O, statusId: E, tweet: S }
          })
          .adjustStateProps(function (e) {
            var t = e.screenName,
              r = e.statusId
            return { screenName: t, statusId: r, tweet: e.tweet, usersUrtModule: Object(b.a)(r) }
          })
          .withAnalytics({ page: 'quote_tweets_timeline' }),
        T = r('FIs5'),
        P = r('3XMw'),
        k = r.n(P),
        R = r('yoO3'),
        I = r('u3ZE'),
        j = r('h2mu'),
        x = r('3IPs'),
        M = r('VS6U'),
        q = r('Irs7')
      function D(e) {
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
            var c = h()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var F = k.a.bd7c039f,
        A = k.a.e9f1fbcb,
        L = { vertical: 'tweet_detail_quote' },
        H = g.createElement(T.a, { message: A }),
        N = (function (e) {
          l()(r, e)
          var t = D(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_quoteTweetSearchQueryString', 'quoted_tweet_id:'.concat(e.props.statusId)),
              m()(s()(e), '_renderQuoteTweetTimeline', function () {
                return g.createElement(j.a, {
                  emptyStateComponent: H,
                  fetchOptions: L,
                  query: e._quoteTweetSearchQueryString,
                  querySrc: I.a.TweetDetailQuoteTweet,
                  searchMode: x.c.Top,
                })
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    r = e.tweet
                  return g.createElement(
                    R.a,
                    null,
                    g.createElement(M.a, {
                      backLocation: r ? r.permalink : '/',
                      history: t,
                      primaryContent: this._renderQuoteTweetTimeline(),
                      sidebarContent: g.createElement(v.a, { withWhoToFollow: !1 }),
                      title: F,
                    }),
                  )
                },
              },
            ]),
            r
          )
        })(g.Component)
      t.default = Object(q.a)(C(N))
    },
    h2mu: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        c = r.n(n),
        i = r('Y9Ll'),
        o = r.n(i),
        a = r('1Pcy'),
        s = r.n(a),
        u = r('5Yy7'),
        l = r.n(u),
        p = r('N+ot'),
        f = r.n(p),
        d = r('AuHH'),
        h = r.n(d),
        y = r('KEM+'),
        m = r.n(y),
        g = (r('2G9S'), r('ERkP')),
        v = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ezF+')),
        b = r('QIgh'),
        w = r('8UdT'),
        _ = r('iu0J'),
        E = r('zgaL'),
        O = r('PH3B'),
        S =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(217).then(r.bind(null, 'sc5C'))
            },
            loaderKey: 'relatedSearchDefaultLoader',
            strategy: r('XBtf').a.Critical,
          }),
        C = v.e(S),
        T = (r('yH/f'), Object.freeze({ Expand: 'Expand', Replace: 'Replace', Suggest: 'Suggest' })),
        P = r('VPAj'),
        k = r('zh9S'),
        R = r('X04g'),
        I = r('u3ZE'),
        j = r('MWbm'),
        x = r('t62R'),
        M = r('rHpw'),
        q = r('3XMw'),
        D = r.n(q)
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
            var c = h()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var A = D.a.je5502ea,
        L = D.a.bc4628a0,
        H = function (e) {
          return g.createElement(x.b, { weight: 'bold' }, e)
        },
        N = (function (e) {
          l()(r, e)
          var t = F(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: I.a.SpellingSuggestionClick } }
                  return g.createElement(
                    x.b,
                    { link: t, style: U.root },
                    g.createElement(D.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, H(e)),
                  )
                },
              },
            ]),
            r
          )
        })(g.PureComponent),
        z = (function (e) {
          l()(r, e)
          var t = F(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.original,
                    n = e.suggestion,
                    c = { pathname: '/search', query: { q: n, src: I.a.SpellingCorrectionClick } }
                  return g.createElement(
                    j.a,
                    { style: U.root },
                    g.createElement(x.b, { weight: 'bold' }, L({ suggestion: n })),
                    g.createElement(
                      x.b,
                      { link: c, onClick: t },
                      g.createElement(D.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, H(r)),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(g.PureComponent),
        Q = (function (e) {
          l()(r, e)
          var t = F(r)
          function r() {
            return c()(this, r), t.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.original,
                    n = e.suggestion,
                    c = { pathname: '/search', query: { q: r, src: I.a.SpellingExpansionRevertClick } }
                  return g.createElement(
                    j.a,
                    { style: U.root },
                    g.createElement(x.b, { weight: 'bold' }, A({ suggestion: n })),
                    g.createElement(
                      x.b,
                      { link: c, onClick: t },
                      g.createElement(D.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, H(r)),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(g.PureComponent),
        U = M.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        })
      function B(e, t) {
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : B(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var K,
        V = function (e) {
          return function (t) {
            return {
              item_type: R.a.ItemType.SEARCH,
              name: 'spelling_'.concat(e),
              description: t.content.spellingResult.text,
              position: 0,
            }
          }
        },
        J = function (e) {
          return {
            items: [
              {
                search_details: { query: e.content.originalQuery },
                query_details: { query_item: e.content.spellingResult.text },
              },
            ],
          }
        },
        W = function (e) {
          var t = e.actions.scribe,
            r = e.scribeData
          return t(X(X({}, e.scribeNamespace), {}, { action: 'impression' }), r)
        },
        Z = v.g({
          bindActions: function () {
            return { scribe: k.c }
          },
          component: Q,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: V('expansion'),
          selectData: Object(P.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              c = r.content
            return {
              onClick: function () {
                return t(X(X({}, n), {}, { element: 'expansion_revert', action: 'search' }), J(r))
              },
              original: c.originalQuery,
              suggestion: c.spellingResult.text,
            }
          },
          onImpression: W,
        }),
        Y = v.g({
          bindActions: function () {
            return { scribe: k.c }
          },
          component: z,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: V('replacement'),
          selectData: Object(P.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              r = e.entry,
              n = e.scribeNamespace,
              c = r.content
            return {
              onClick: function () {
                return t(X(X({}, n), {}, { element: 'replacement_revert', action: 'search' }), J(r))
              },
              original: c.originalQuery,
              suggestion: c.spellingResult.text,
            }
          },
          onImpression: W,
        }),
        G = v.g({
          component: N,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: V('suggestion'),
          selectData: Object(P.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
          onImpression: W,
        }),
        $ = v.c({
          selectDisplayType: function (e) {
            return e.content.spellingAction
          },
          handlers: ((K = {}), m()(K, T.Expand, Z), m()(K, T.Replace, Y), m()(K, T.Suggest, G), K),
        })
      function ee(e, t) {
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
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ee(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var re = function (e) {
          var t = e.shouldStoreTypeaheadItem,
            r = e.withUserPresence
          return te(
            te(
              {},
              Object(b.a)({
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
                m()(t, w.b.News, O.a),
                m()(t, w.b.EventSummary, Object(_.a)({ errorContext: 'SEARCH_SCREEN', shouldStoreTypeaheadItem: r })),
                m()(t, w.b.RelatedSearch, C),
                m()(t, w.b.FollowSearch, v.e(v.a())),
                m()(t, w.b.FollowSearchAction, v.e(v.a())),
                m()(t, w.b.Place, v.e(v.a())),
                m()(t, w.b.MomentAnnotation, E.a),
                m()(t, w.b.Spelling, $),
                t
              )
            })({ shouldStoreTypeaheadItem: t }),
          )
        },
        ne = r('3X8/'),
        ce = r('oQhu'),
        ie = r('EUHl'),
        oe = r('7BdX'),
        ae = r('fTQJ'),
        se = r('i6OR'),
        ue = r('FIs5'),
        le = r('v6aA')
      function pe(e) {
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
            var c = h()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var fe = D.a.c09de2d4,
        de = g.createElement(
          D.a.I18NFormatMessage,
          { $i18n: 'f0089e9c' },
          g.createElement(x.b, { link: '/settings/search' }, D.a.d2918e88),
        ),
        he = D.a.ae111c99,
        ye = (function (e) {
          l()(r, e)
          var t = pe(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_shouldStoreTypeaheadItem', function (t) {
                switch (t) {
                  case R.a.ItemType.USER:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_users_enabled')
                  case R.a.ItemType.TOPIC:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_topics_enabled')
                  case R.a.ItemType.EVENT:
                    return e.context.featureSwitches.isTrue('responsive_web_recent_searches_events_enabled')
                  default:
                    return !1
                }
              }),
              m()(s()(e), '_getModule', function () {
                var t = e.props,
                  r = t.query,
                  n = t.querySrc,
                  c = t.searchFilters,
                  i = t.searchMode,
                  o = t.urtEndpointOptions,
                  a = t.vertical
                return e._getMemoizedModule(r, n, i, c, a, o)
              }),
              m()(s()(e), '_renderEmptyTimeline', function () {
                var t = e.props,
                  r = t.emptyStateComponent,
                  n = t.query
                return r || g.createElement(ue.a, { header: he({ query: n }), message: de })
              }),
              m()(
                s()(e),
                '_getMemoizedModule',
                Object(ce.a)(function (e, t, r, n, c, i) {
                  return Object(se.b)({
                    query: e,
                    searchMode: r,
                    querySource: t,
                    searchFilters: n,
                    vertical: c,
                    urtEndpointOptions: i,
                  })
                }),
              ),
              m()(
                s()(e),
                '_getMemoizedEntryConfiguration',
                Object(ce.a)(function (t) {
                  return re({ shouldStoreTypeaheadItem: e._shouldStoreTypeaheadItem, withUserPresence: t })
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
                  return g.createElement(ae.a, {
                    apiErrorHandlerMap: ne.a,
                    entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence),
                    fetchOptions: this.props.fetchOptions,
                    module: this._getModule(),
                    newTweetsPillMode: ie.a.CLIENT,
                    prerollDisplayLocation: oe.c.SEARCH_TWEETS,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: fe,
                    withUserPresence: this.props.withUserPresence,
                  })
                },
              },
            ]),
            r
          )
        })(g.Component)
      m()(ye, 'contextType', le.a)
      t.a = ye
    },
    i6OR: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return h
      })
      var n,
        c = r('KEM+'),
        i = r.n(c),
        o = (r('jQ3i'), r('x4t0'), r('2G9S'), r('IAdD'), r('LW0h'), r('vrRf'), r('z84I'), r('u3ZE')),
        a = r('3IPs'),
        s = r('ZNT5'),
        u = r('eR3e'),
        l = 'search-',
        p = ' near:me',
        f =
          ((n = {}),
          i()(n, a.c.Top, {}),
          i()(n, a.c.Live, { tweet_search_mode: a.c.Live }),
          i()(n, a.c.User, { result_filter: a.c.User }),
          i()(n, a.c.Image, { result_filter: a.c.Image }),
          i()(n, a.c.Video, { result_filter: a.c.Video }),
          n),
        d = function (e) {
          return (function (e) {
            return e === o.a.SpellingCorrectionRevertClick || e === o.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        h = function () {
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
          n = void 0 === r ? a.c.Top : r,
          c = e.querySource,
          i = e.searchFilters,
          o = e.vertical,
          u = e.urtEndpointOptions,
          h = d(c),
          y = i && i.peopleFilter ? 'searcher_follows' : void 0,
          m = y ? '-pf' : '',
          g = i && i.locationFilter && !t.includes(p) ? ''.concat(t).concat(p) : t,
          v = ''.concat(l).concat(g, '-').concat(n).concat(h).concat(m)
        return Object(s.a)({
          timelineId: v,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == u ? void 0 : u.requestParams,
              { q: g, social_filter: y, vertical: o },
              f[n],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: n === a.c.Live ? 5e3 : void 0,
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
        c =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(211).then(r.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: r('XBtf').a.Critical,
          })
      t.a = n.e(c)
    },
  },
])
//# sourceMappingURL=WIPED
