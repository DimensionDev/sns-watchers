;(window.webpackJsonp = window.webpackJsonp || []).push([
  [356],
  {
    '5aND': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('yiKp'),
        i = n.n(r),
        a = n('ezF+'),
        o = (n('ERkP'), n('VPAj')),
        c = n('zh9S'),
        s = n('hYIq'),
        u = n('ONGZ'),
        l = a.g({
          bindActions: function () {
            return { scribe: c.scribeAction }
          },
          component: s.b,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(u.b)('expansion'),
          selectData: Object(o.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              r = e.scribeNamespace,
              a = n.content
            return {
              onClick: function () {
                return t(i()(i()({}, r), {}, { element: 'expansion_revert', action: 'search' }), Object(u.a)(n))
              },
              original: a.originalQuery,
              suggestion: a.spellingResult.text,
            }
          },
        })
      t.default = l
    },
    '77Dd': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('yiKp'),
        i = n.n(r),
        a = n('ezF+'),
        o = (n('ERkP'), n('VPAj')),
        c = n('zh9S'),
        s = n('hYIq'),
        u = n('ONGZ'),
        l = a.g({
          bindActions: function () {
            return { scribe: c.scribeAction }
          },
          component: s.a,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(u.b)('replacement'),
          selectData: Object(o.a)({}),
          createProps: function (e) {
            var t = e.actions.scribe,
              n = e.entry,
              r = e.scribeNamespace,
              a = n.content
            return {
              onClick: function () {
                return t(i()(i()({}, r), {}, { element: 'replacement_revert', action: 'search' }), Object(u.a)(n))
              },
              original: a.originalQuery,
              suggestion: a.spellingResult.text,
            }
          },
        })
      t.default = l
    },
    D4Iv: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        i = (n('ERkP'), n('VPAj')),
        a = n('ONGZ'),
        o = n('hYIq'),
        c = r.g({
          component: o.c,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(a.b)('suggestion'),
          selectData: Object(i.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
        })
      t.default = c
    },
    ONGZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return a
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
        a = function (e) {
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
        return I
      }),
        n.d(t, 'a', function () {
          return O
        }),
        n.d(t, 'b', function () {
          return S
        })
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('5Yy7'),
        s = n.n(c),
        u = n('2VqO'),
        l = n.n(u),
        p = n('ERkP'),
        g = n.n(p),
        b = n('u3ZE'),
        m = 'searchSpellingSuggestionLabel',
        f = 'searchSpellingSuggestionLink',
        h = n('MWbm'),
        d = n('t62R'),
        y = n('rHpw'),
        v = n('3XMw'),
        k = n.n(v),
        E = k.a.je5502ea,
        q = k.a.bc4628a0,
        C = function (e) {
          return g.a.createElement(d.b, { weight: 'bold' }, e)
        },
        I = (function (e) {
          s()(n, e)
          var t = l()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: b.a.SpellingSuggestionClick } }
                  return g.a.createElement(
                    d.b,
                    { link: t, style: D.root },
                    g.a.createElement(k.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, C(e)),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        O = (function (e) {
          s()(n, e)
          var t = l()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    r = e.suggestion,
                    i = { pathname: '/search', query: { q: r, src: b.a.SpellingCorrectionClick } }
                  return g.a.createElement(
                    h.a,
                    { style: D.root },
                    g.a.createElement(d.b, { weight: 'bold' }, q({ suggestion: r })),
                    g.a.createElement(
                      d.b,
                      { link: i, onClick: t },
                      g.a.createElement(k.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, C(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        S = (function (e) {
          s()(n, e)
          var t = l()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    r = e.suggestion,
                    i = { pathname: '/search', query: { q: n, src: b.a.SpellingExpansionRevertClick } }
                  return g.a.createElement(
                    h.a,
                    { style: D.root },
                    g.a.createElement(d.b, { testID: m, weight: 'bold' }, E({ suggestion: r })),
                    g.a.createElement(
                      d.b,
                      { link: i, onClick: t, testID: f },
                      g.a.createElement(k.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, C(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        D = y.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        })
    },
  },
])
//# sourceMappingURL=WIPED
