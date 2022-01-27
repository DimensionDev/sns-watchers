;(window.webpackJsonp = window.webpackJsonp || []).push([
  [343],
  {
    '5aND': function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        c = n('ezF+'),
        i = (n('ERkP'), n('VPAj')),
        a = n('zh9S'),
        u = n('hYIq'),
        s = n('ONGZ')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = c.g({
        bindActions: function () {
          return { scribe: a.c }
        },
        component: u.b,
        divider: { top: !0, bottom: !0 },
        getScribeDataItem: Object(s.b)('expansion'),
        selectData: Object(i.a)({}),
        createProps: function (e) {
          var t = e.actions.scribe,
            n = e.entry,
            r = e.scribeNamespace,
            o = n.content
          return {
            onClick: function () {
              return t(p(p({}, r), {}, { element: 'expansion_revert', action: 'search' }), Object(s.a)(n))
            },
            original: o.originalQuery,
            suggestion: o.spellingResult.text,
          }
        },
      })
      t.default = f
    },
    '77Dd': function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        c = n('ezF+'),
        i = (n('ERkP'), n('VPAj')),
        a = n('zh9S'),
        u = n('hYIq'),
        s = n('ONGZ')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = c.g({
        bindActions: function () {
          return { scribe: a.c }
        },
        component: u.a,
        divider: { top: !0, bottom: !0 },
        getScribeDataItem: Object(s.b)('replacement'),
        selectData: Object(i.a)({}),
        createProps: function (e) {
          var t = e.actions.scribe,
            n = e.entry,
            r = e.scribeNamespace,
            o = n.content
          return {
            onClick: function () {
              return t(p(p({}, r), {}, { element: 'replacement_revert', action: 'search' }), Object(s.a)(n))
            },
            original: o.originalQuery,
            suggestion: o.spellingResult.text,
          }
        },
      })
      t.default = f
    },
    D4Iv: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = (n('ERkP'), n('VPAj')),
        c = n('ONGZ'),
        i = n('hYIq'),
        a = r.g({
          component: i.c,
          divider: { top: !0, bottom: !0 },
          getScribeDataItem: Object(c.b)('suggestion'),
          selectData: Object(o.a)({}),
          createProps: function (e) {
            return { suggestion: e.entry.content.spellingResult.text }
          },
        })
      t.default = a
    },
    ONGZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return c
        })
      var r = n('X04g'),
        o = function (e) {
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
        return E
      }),
        n.d(t, 'a', function () {
          return k
        }),
        n.d(t, 'b', function () {
          return D
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        i = n.n(c),
        a = n('5Yy7'),
        u = n.n(a),
        s = n('N+ot'),
        l = n.n(s),
        p = n('AuHH'),
        f = n.n(p),
        b = n('ERkP'),
        g = n('u3ZE'),
        m = n('MWbm'),
        y = n('t62R'),
        O = n('rHpw'),
        h = n('3XMw'),
        d = n.n(h)
      function v(e) {
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
          var n,
            r = f()(e)
          if (t) {
            var o = f()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return l()(this, n)
        }
      }
      var j = d.a.je5502ea,
        P = d.a.bc4628a0,
        w = function (e) {
          return b.createElement(y.b, { weight: 'bold' }, e)
        },
        E = (function (e) {
          u()(n, e)
          var t = v(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.suggestion,
                    t = { pathname: '/search', query: { q: e, src: g.a.SpellingSuggestionClick } }
                  return b.createElement(
                    y.b,
                    { link: t, style: R.root },
                    b.createElement(d.a.I18NFormatMessage, { $i18n: 'hce48b8a' }, w(e)),
                  )
                },
              },
            ]),
            n
          )
        })(b.PureComponent),
        k = (function (e) {
          u()(n, e)
          var t = v(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    r = e.suggestion,
                    o = { pathname: '/search', query: { q: r, src: g.a.SpellingCorrectionClick } }
                  return b.createElement(
                    m.a,
                    { style: R.root },
                    b.createElement(y.b, { weight: 'bold' }, P({ suggestion: r })),
                    b.createElement(
                      y.b,
                      { link: o, onClick: t },
                      b.createElement(d.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, w(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.PureComponent),
        D = (function (e) {
          u()(n, e)
          var t = v(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.original,
                    r = e.suggestion,
                    o = { pathname: '/search', query: { q: n, src: g.a.SpellingExpansionRevertClick } }
                  return b.createElement(
                    m.a,
                    { style: R.root },
                    b.createElement(y.b, { weight: 'bold' }, j({ suggestion: r })),
                    b.createElement(
                      y.b,
                      { link: o, onClick: t },
                      b.createElement(d.a.I18NFormatMessage, { $i18n: 'h36fe5c9' }, w(n)),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.PureComponent),
        R = O.a.create(function (e) {
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
