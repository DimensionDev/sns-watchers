;(window.webpackJsonp = window.webpackJsonp || []).push([
  [233],
  {
    sc5C: function (e, n, c) {
      'use strict'
      c.r(n)
      var i = c('ezF+'),
        t = (c('hBvt'), c('ERkP')),
        l = c.n(t),
        a = c('u3ZE'),
        r = c('htQn'),
        o = c('t62R')
      function s(e) {
        var n,
          c = e.entry,
          i = null == c || null === (n = c.content) || void 0 === n ? void 0 : n.relatedSearch.text,
          t = l.a.useMemo(
            function () {
              return { pathname: '/search', query: { q: i, src: a.a.RelatedQueryClick } }
            },
            [i],
          )
        return l.a.createElement(r.a, { link: t, style: d.link }, l.a.createElement(o.b, null, i))
      }
      var d = c('rHpw').a.create(function (e) {
          return {
            link: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        k = l.a.memo(s),
        p = i.b({ component: k }).getHandler()
      n.default = p
    },
    u3ZE: function (e, n, c) {
      'use strict'
      n.a = {
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
