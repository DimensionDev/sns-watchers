;(window.webpackJsonp = window.webpackJsonp || []).push([
  [354],
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
            return { scribe: c.c }
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
            return { scribe: c.c }
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
        return q
      }),
        n.d(t, 'a', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return O
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
        m = n('u3ZE'),
        b = n('MWbm'),
        f = n('t62R'),
        d = n('rHpw'),
        h = n('3XMw'),
        y = n.n(h),
        v = y.a.je5502ea,
        k = y.a.bc4628a0,
        E = function (e) {
          return g.a.createElement(f.b, { weight: 'bold' }, e)
        },
        q = (function (e) {
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
                    t = { pathname: '/search', query: { q: e, src: m.a.SpellingSuggestionClick } }
                  return g.a.createElement(
                    f.b,
                    { link: t, style: P.root },
                    g.a.createElement(y.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, E(e)),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        C = (function (e) {
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
                    i = { pathname: '/search', query: { q: r, src: m.a.SpellingCorrectionClick } }
                  return g.a.createElement(
                    b.a,
                    { style: P.root },
                    g.a.createElement(f.b, { weight: 'bold' }, k({ suggestion: r })),
                    g.a.createElement(
                      f.b,
                      { link: i, onClick: t },
                      g.a.createElement(y.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, E(n)),
                    ),
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
                    i = { pathname: '/search', query: { q: n, src: m.a.SpellingExpansionRevertClick } }
                  return g.a.createElement(
                    b.a,
                    { style: P.root },
                    g.a.createElement(f.b, { weight: 'bold' }, v({ suggestion: r })),
                    g.a.createElement(
                      f.b,
                      { link: i, onClick: t },
                      g.a.createElement(y.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, E(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        P = d.a.create(function (e) {
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
