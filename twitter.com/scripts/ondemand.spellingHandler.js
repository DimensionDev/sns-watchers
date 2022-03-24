;(window.webpackJsonp = window.webpackJsonp || []).push([
  [358],
  {
    '5aND': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('yiKp'),
        i = n.n(r),
        c = n('ezF+'),
        a = (n('ERkP'), n('VPAj')),
        o = n('zh9S'),
        l = n('hYIq'),
        s = n('ONGZ'),
        u = c.g({
          bindActions: function () {
            return { scribe: o.c }
          },
          component: l.b,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(s.b)('expansion'),
          selectData: Object(a.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              r = e.scribeNamespace,
              c = n.content
            return {
              onClick: function () {
                return t(i()(i()({}, r), {}, { element: 'expansion_revert', action: 'search' }), Object(s.a)(n))
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
      var r = n('yiKp'),
        i = n.n(r),
        c = n('ezF+'),
        a = (n('ERkP'), n('VPAj')),
        o = n('zh9S'),
        l = n('hYIq'),
        s = n('ONGZ'),
        u = c.g({
          bindActions: function () {
            return { scribe: o.c }
          },
          component: l.a,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(s.b)('replacement'),
          selectData: Object(a.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              r = e.scribeNamespace,
              c = n.content
            return {
              onClick: function () {
                return t(i()(i()({}, r), {}, { element: 'replacement_revert', action: 'search' }), Object(s.a)(n))
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
      var r = n('ezF+'),
        i = (n('ERkP'), n('VPAj')),
        c = n('ONGZ'),
        a = n('hYIq'),
        o = r.g({
          component: a.c,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(c.b)('suggestion'),
          selectData: Object(i.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
        })
      t.default = o
    },
    ONGZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return c
        })
      var r = n('X04g'),
        i = function (e) {
          return function (t) {
            return {
              item_type: r.a.ItemType.SEARCH,
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
        return C
      }),
        n.d(t, 'a', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return S
        })
      var r = n('VrFO'),
        i = n.n(r),
        c = n('Y9Ll'),
        a = n.n(c),
        o = n('5Yy7'),
        l = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        p = n('ERkP'),
        g = n.n(p),
        d = n('u3ZE'),
        k = n('MWbm'),
        m = n('t62R'),
        h = n('rHpw'),
        b = n('3XMw'),
        f = n.n(b),
        _ = f.a.je5502ea,
        y = f.a.bc4628a0,
        v = function (e) {
          return g.a.createElement(m.b, { weight: 'bold' }, e)
        },
        C = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: d.a.SpellingSuggestionClick } }
                  return g.a.createElement(
                    m.b,
                    { link: t, style: q.root },
                    g.a.createElement(f.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, v(e)),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        E = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    r = e.suggestion,
                    i = { pathname: '/search', query: { q: r, src: d.a.SpellingCorrectionClick } }
                  return g.a.createElement(
                    k.a,
                    { style: q.root },
                    g.a.createElement(m.b, { weight: 'bold' }, y({ suggestion: r })),
                    g.a.createElement(
                      m.b,
                      { link: i, onClick: t },
                      g.a.createElement(f.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, v(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        S = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    r = e.suggestion,
                    i = { pathname: '/search', query: { q: n, src: d.a.SpellingExpansionRevertClick } }
                  return g.a.createElement(
                    k.a,
                    { style: q.root },
                    g.a.createElement(m.b, { weight: 'bold' }, _({ suggestion: r })),
                    g.a.createElement(
                      m.b,
                      { link: i, onClick: t },
                      g.a.createElement(f.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, v(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        q = h.a.create(function (e) {
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
