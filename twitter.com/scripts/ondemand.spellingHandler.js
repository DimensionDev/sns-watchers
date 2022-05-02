;(window.webpackJsonp = window.webpackJsonp || []).push([
  [358],
  {
    '5aND': function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('yiKp'),
        r = n.n(i),
        c = n('ezF+'),
        a = (n('ERkP'), n('VPAj')),
        o = n('zh9S'),
        l = n('hYIq'),
        s = n('ONGZ'),
        u = c.g({
          bindActions: function () {
            return { scribe: o.scribeAction }
          },
          component: l.b,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(s.b)('expansion'),
          selectData: Object(a.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              i = e.scribeNamespace,
              c = n.content
            return {
              onClick: function () {
                return t(r()(r()({}, i), {}, { element: 'expansion_revert', action: 'search' }), Object(s.a)(n))
              },
              original: c.originalQuery,
              suggestion: c.spellingResult.text,
            }
          },
        })
      t.default = u
    },
    '77Dd': function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('yiKp'),
        r = n.n(i),
        c = n('ezF+'),
        a = (n('ERkP'), n('VPAj')),
        o = n('zh9S'),
        l = n('hYIq'),
        s = n('ONGZ'),
        u = c.g({
          bindActions: function () {
            return { scribe: o.scribeAction }
          },
          component: l.a,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(s.b)('replacement'),
          selectData: Object(a.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              i = e.scribeNamespace,
              c = n.content
            return {
              onClick: function () {
                return t(r()(r()({}, i), {}, { element: 'replacement_revert', action: 'search' }), Object(s.a)(n))
              },
              original: c.originalQuery,
              suggestion: c.spellingResult.text,
            }
          },
        })
      t.default = u
    },
    D4Iv: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('ezF+'),
        r = (n('ERkP'), n('VPAj')),
        c = n('ONGZ'),
        a = n('hYIq'),
        o = i.g({
          component: a.c,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(c.b)('suggestion'),
          selectData: Object(r.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
        })
      t.default = o
    },
    ONGZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return c
        })
      var i = n('X04g'),
        r = function (e) {
          return function (t) {
            return {
              item_type: i.a.ItemType.SEARCH,
              name: 'spelling_'.concat(e),
              description: t.content.spellingResult.text,
              position: 0,
            }
          }
        },
        c = function (e) {
          return {
            items: [
              {
                search_details: { query: e.content.originalQuery },
                query: { query_item: e.content.spellingResult.text },
              },
            ],
          }
        }
    },
    hYIq: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return E
      }),
        n.d(t, 'a', function () {
          return q
        }),
        n.d(t, 'b', function () {
          return R
        })
      var i = n('VrFO'),
        r = n.n(i),
        c = n('Y9Ll'),
        a = n.n(c),
        o = n('5Yy7'),
        l = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        g = n('ERkP'),
        p = n.n(g),
        d = n('u3ZE'),
        k = 'searchSpellingSuggestionLabel',
        m = 'searchSpellingSuggestionLink',
        h = n('MWbm'),
        b = n('t62R'),
        f = n('rHpw'),
        _ = n('3XMw'),
        y = n.n(_),
        v = y.a.je5502ea,
        C = y.a.bc4628a0,
        S = function (e) {
          return p.a.createElement(b.b, { weight: 'bold' }, e)
        },
        E = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: d.a.SpellingSuggestionClick } }
                  return p.a.createElement(
                    b.b,
                    { link: t, style: w.root },
                    p.a.createElement(y.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, S(e)),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        q = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    i = e.suggestion,
                    r = { pathname: '/search', query: { q: i, src: d.a.SpellingCorrectionClick } }
                  return p.a.createElement(
                    h.a,
                    { style: w.root },
                    p.a.createElement(b.b, { weight: 'bold' }, C({ suggestion: i })),
                    p.a.createElement(
                      b.b,
                      { link: r, onClick: t },
                      p.a.createElement(y.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, S(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        R = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    i = e.suggestion,
                    r = { pathname: '/search', query: { q: n, src: d.a.SpellingExpansionRevertClick } }
                  return p.a.createElement(
                    h.a,
                    { style: w.root },
                    p.a.createElement(b.b, { testID: k, weight: 'bold' }, v({ suggestion: i })),
                    p.a.createElement(
                      b.b,
                      { link: r, onClick: t, testID: m },
                      p.a.createElement(y.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, S(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.PureComponent),
        w = f.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        })
    },
    u3ZE: function (e, t, n) {
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
