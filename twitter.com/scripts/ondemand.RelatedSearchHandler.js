;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    sc5C: function (e, c, n) {
      'use strict'
      n.r(c)
      var t = n('ezF+'),
        i = n('ERkP'),
        a = n.n(i),
        l = n('VPAj'),
        r = (n('hBvt'), n('u3ZE')),
        o = n('htQn'),
        s = n('t62R')
      function k(e) {
        var c = e.searchTerm,
          n = { pathname: '/search', query: { q: c, src: r.a.RelatedQueryClick } }
        return a.a.createElement(o.a, { link: n, style: p.link }, a.a.createElement(s.b, null, c))
      }
      var p = n('rHpw').a.create(function (e) {
          return {
            link: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        d = a.a.memo(k),
        _ = t.g({
          component: d,
          selectData: Object(l.a)({}),
          createProps: function (e) {
            return { searchTerm: e.entry.content.relatedSearch.text }
          },
        })
      c.default = _
    },
    u3ZE: function (e, c, n) {
      'use strict'
      c.a = {
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
